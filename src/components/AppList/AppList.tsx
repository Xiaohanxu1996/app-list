import React from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import AppListItem from './AppListItem';
import results from './mockdata.json';

const AppList = () => {
  return (
    <ul className={classnames('c-applist')}>
      <Grid container>
        {results.map((app, index) => {
          const { id, name, genres, artworkUrl100: imageUrl } = app;
          const ranking = index + 1;
          const genre = genres[0].name;
          const appInfo = {
            id,
            name,
            genre,
            ranking,
            imageUrl,
          };
          return (
            <Grid item sm={12} md={4}>
              <AppListItem {...appInfo} />
            </Grid>
          );
        })}
      </Grid>
    </ul>
  );
};

export default AppList;
