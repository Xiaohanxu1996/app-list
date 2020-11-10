import React from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import AppListItem from './AppListItem';
import { AppInfoType } from '@types';

const AppList = ({ topFreeApps }: { topFreeApps: AppInfoType[] }) => {
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
              <AppListItem {...appInfo} />
            </Grid>
          );
        })}
      </Grid>
    </ul>
  );
};

export default AppList;
