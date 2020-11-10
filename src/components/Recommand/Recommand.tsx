import React from 'react';
import classnames from 'classnames';
import RecommandItem from './RecommandItem';
import { AppInfoType } from '@types';

const Recommand = ({ topFreeApps }: { topFreeApps: AppInfoType[] }) => {
  return (
    <>
      <div className={classnames('c-recommand')}>
        <div className={classnames('c-recommand-header')}>推介</div>
        <div className={classnames('c-recommand-container')}>
          {topFreeApps.map((app) => {
            const { name, genre, imageUrl } = app;
            const appInfo = {
              name,
              genre,
              imageUrl,
            };
            return <RecommandItem {...appInfo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Recommand;
