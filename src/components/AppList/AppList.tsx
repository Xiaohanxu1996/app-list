import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import Fuse from 'fuse.js';
import { Context } from '@store';
import { getApps } from '@api';
import { setFreeApp, loadMore } from '@action';
import { appInfoParser } from '@util';
import { useVisibility } from '@hooks';
import AppListItem from './AppListItem';

const AppList: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const { topFreeApps, page, searchTerm } = state;
  const [listSize, setListSize] = useState(0);
  const [filteredResult, setfilteredResult] = useState(topFreeApps);

  const lastItem = useVisibility(
    (visible) => {
      if (visible) {
        dispatch(loadMore());
      }
    },
    [listSize]
  );

  useEffect(() => {
    if (searchTerm !== '') {
      const fuse = new Fuse(topFreeApps, { keys: ['name', 'genre'] });
      const filteredResults = fuse.search(searchTerm);
      const parsedResults = filteredResults.map((app) => {
        const { item } = app;
        return item;
      });
      setfilteredResult(parsedResults);
    } else {
      setfilteredResult(topFreeApps);
    }
  }, [topFreeApps, searchTerm]);

  useEffect(() => {
    const fetchTopFreeApps = async () => {
      const response = await getApps({
        page: page,
        size: 10,
        type: 'top-free',
      });
      const { results } = response;
      const parsedResults = appInfoParser(results);
      dispatch(setFreeApp(parsedResults));
      setListSize(parsedResults.length);
    };

    fetchTopFreeApps();
  }, [page, dispatch]);

  return (
    <ul className={classnames('c-applist')}>
      <Grid container>
        {filteredResult.map((app, index) => {
          const { id, name, genre, imageUrl } = app;
          const ranking = index + 1;
          const appInfo = {
            id,
            name,
            genre,
            imageUrl,
            ranking,
          };
          return (
            <Grid key={`${id}-${ranking}`} item sm={12} md={4}>
              <AppListItem
                ref={
                  topFreeApps[topFreeApps.length - 1].id === app.id
                    ? lastItem
                    : null
                  //  load next page when last item is visible
                }
                {...appInfo}
              />
            </Grid>
          );
        })}
      </Grid>
    </ul>
  );
};

export default AppList;
