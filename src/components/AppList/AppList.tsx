import React from 'react';
import { Grid } from '@material-ui/core';
import classnames from 'classnames';
import AppListItem from './AppListItem';
import { AppInfoType } from '@types';

const AppList = ({ popularApps }: { popularApps: AppInfoType[] }) => {
  return (
    <ul className={classnames('c-applist')}>
      <Grid container>
        {popularApps.map((app, index) => {
          const { id, name, genre, imageUrl } = app;
          const ranking = index + 1;
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
