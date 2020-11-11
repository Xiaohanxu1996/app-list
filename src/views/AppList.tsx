import React, { useContext, useEffect, ChangeEvent } from 'react';
import { Recommand, AppListComponent, Search, Loading } from '@components';
import { Context } from '@store';
import { getApps } from '@api';
import { setLoaded, setGrossingApp, setFreeApp, setSearchTerm } from '@action';
import { appInfoParser } from '@util';

const AppList: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const { topFreeApps, topGrowApps, loading, page, searchTerm } = state;

  useEffect(() => {
    if (topFreeApps.length !== 0 && topGrowApps.length !== 0) {
      dispatch(setLoaded());
    }
  }, [page, topFreeApps, topGrowApps, dispatch]);

  useEffect(() => {
    const fetchtopGrowApps = async () => {
      const response = await getApps({
        page: 1,
        size: 10,
        type: 'top-grossing',
      });
      const { results } = response;
      const parsedResults = appInfoParser(results);
      dispatch(setGrossingApp(parsedResults));
    };

    fetchtopGrowApps();
  }, [dispatch]);

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
    };

    fetchTopFreeApps();
  }, [page, dispatch]);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <>
      <Search handler={searchHandler} searchTerm={searchTerm} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Recommand />
          <AppListComponent />
        </>
      )}
    </>
  );
};

export default AppList;
