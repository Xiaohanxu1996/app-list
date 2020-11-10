import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Recommand, AppListComponent, Search, Loading } from '@components';
import { Context } from '@store';
import { getApps } from '@api';
import { setFreeApp, setGrossingApp, setLoaded } from '@action';
import { appInfoParser } from '@util';

const AppList: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const { topGrowApps, topFreeApps, loading } = state;

  useEffect(() => {
    if (topGrowApps.length !== 0 && topFreeApps.length !== 0) {
      dispatch(setLoaded());
    }
  }, [topGrowApps, topFreeApps, dispatch]);

  useEffect(() => {
    const fetchTopFreeApps = async () => {
      const response = await getApps({
        page: 1,
        size: 10,
        type: 'top-free',
      });
      const { results } = response;
      const parsedResults = appInfoParser(results);
      dispatch(setFreeApp(parsedResults));
    };

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
    fetchTopFreeApps();
  }, [dispatch]);
  return (
    <>
      <Search handler={() => {}} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Recommand topGrowApps={topGrowApps} />
          <AppListComponent topFreeApps={topFreeApps} />
        </>
      )}
    </>
  );
};

export default AppList;
