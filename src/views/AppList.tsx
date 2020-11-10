import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Recommand, AppListComponent, Search } from '@components';
import { Context } from '@store';
import { getTopFreeApps, getTopGrossApps } from '@api';
import { setFreeApp, setRecommandApp } from '@action';

const AppList: FunctionComponent = () => {
  const { state, dispatch } = useContext(Context);
  const { topGrowApps, topFreeApps, loading } = state;
  useEffect(() => {
    const fetchTopFreeApps = async () => {
      const response = await getTopFreeApps({ page: 10, size: 10 });
      const { results } = response;
      const parsedResults = results.map((appRawData: any, index: number) => {
        const { id, name, genres, artworkUrl100: imageUrl } = appRawData;
        const genre = genres[0];
        const ranking = index + 1;
        return {
          id,
          name,
          genre: genre.name,
          imageUrl,
          ranking,
        };
      });
      dispatch(setFreeApp(parsedResults));
    };

    const fetchtopGrowApps = async () => {
      const response = await getTopGrossApps({ page: 1, size: 10 });
      const { results } = response;
      const parsedResults = results.map((appRawData: any, index: number) => {
        const { id, name, genres, artworkUrl100: imageUrl } = appRawData;
        const genre = genres[0];
        const ranking = index + 1;
        return {
          id,
          name,
          genre: genre.name,
          imageUrl,
          ranking,
        };
      });
      dispatch(setRecommandApp(parsedResults));
    };
    fetchtopGrowApps();
    fetchTopFreeApps();
  }, []);
  return (
    <>
      <Search handler={() => {}} />
      <Recommand topGrowApps={topGrowApps} />
      <AppListComponent topFreeApps={topFreeApps} />
    </>
  );
};

export default AppList;
