import React, { useContext, useEffect } from 'react';
import { Recommand, AppListComponent, Search, Loading } from '@components';
import { Context } from '@store';
import { getApps } from '@api';
import { setFreeApp, setGrossingApp, setLoaded } from '@action';
import { appInfoParser } from '@util';

const AppList: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const { topGrowApps, loading, page } = state;
  useEffect(() => {
    if (topGrowApps.length !== 0) {
      dispatch(setLoaded());
    }
  }, [topGrowApps, dispatch]);

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

  return (
    <>
      <Search handler={() => {}} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Recommand topGrowApps={topGrowApps} />
          <AppListComponent />
        </>
      )}
    </>
  );
};

export default AppList;
