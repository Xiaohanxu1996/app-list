import React, { FunctionComponent } from 'react';
import { Recommand, AppListComponent, Search } from '@components';

const AppList: FunctionComponent = () => {
  return (
    <>
      <Search handler={() => {}} />
      <Recommand />
      <AppListComponent />
    </>
  );
};

export default AppList;
