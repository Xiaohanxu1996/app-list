import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import { Context } from '@store';
import { getApps } from '@api';
import { setFreeApp, setLoaded, loadMore } from '@action';
import { appInfoParser } from '@util';
import { useVisibility } from '@hooks';
import AppListItem from './AppListItem';

const AppList = () => {
  const { state, dispatch } = useContext(Context);
  const { topFreeApps, page } = state;
  const [listSize, setListSize] = useState(0);

  const lastItem = useVisibility(
    (visible) => {
      if (visible) {
        dispatch(loadMore());
      }
    },
    [listSize]
  );

  useEffect(() => {
    if (topFreeApps.length !== 0) {
      dispatch(setLoaded());
    }
  }, [topFreeApps, dispatch]);

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
        {topFreeApps.map((app) => {
          const { id, name, genre, imageUrl, ranking } = app;
          const appInfo = {
            id,
            name,
            genre,
            ranking,
            imageUrl,
          };
          return (
            <Grid key={id} item sm={12} md={4}>
              <AppListItem
                ref={
                  topFreeApps[topFreeApps.length - 1].id === app.id
                    ? lastItem
                    : null
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
