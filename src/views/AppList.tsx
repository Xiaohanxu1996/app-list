import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Recommand, AppListComponent, Search } from '@components';
import { Context } from '@store';
import { getTopFreeApps } from '@api';
import { setFreeApp } from 'action';

const AppList: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const { popularApps, topFreeApps, loading } = state;
  useEffect(() => {
    const fetchTopFreeApps = async () => {
      const response = await getTopFreeApps({ page: 10, size: 10 });
      const { results } = response;
      console.log(results);
      dispatch(setFreeApp(results));
    };

    fetchTopFreeApps();
  });
  return (
    <>
      <Search handler={() => {}} />
      <Recommand topFreeApps={topFreeApps} />
      <AppListComponent popularApps={popularApps} />
    </>
  );
};

export default AppList;
