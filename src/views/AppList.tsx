import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Recommand, AppListComponent, Search, Loading } from '@components';
import { Context } from '@store';
import { getApps } from '@api';
import { setFreeApp, setGrossingApp, setLoaded, loadMore } from '@action';
import { appInfoParser } from '@util';

const AppList: FunctionComponent = () => {
  const [isBottom, setIsBottom] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { topGrowApps, topFreeApps, loading, page } = state;
  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 10 >= scrollHeight) {
      setIsBottom(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      dispatch(loadMore());
      setIsBottom(false);
    }
  }, [isBottom, dispatch]);
  useEffect(() => {
    if (topGrowApps.length !== 0 && topFreeApps.length !== 0) {
      dispatch(setLoaded());
    }
  }, [topGrowApps, topFreeApps, dispatch]);

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
          <AppListComponent topFreeApps={topFreeApps} />
        </>
      )}
    </>
  );
};

export default AppList;
