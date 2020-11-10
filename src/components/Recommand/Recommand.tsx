import React, { useContext } from 'react';
import classnames from 'classnames';
import { Context } from '@store';
import RecommandItem from './RecommandItem';

const Recommand = () => {
  const { state } = useContext(Context);
  const { topGrowApps } = state;

  return (
    <>
      <div className={classnames('c-recommand')}>
        <div className={classnames('c-recommand-header')}>推介</div>
        <div className={classnames('c-recommand-container')}>
          {topGrowApps.map((app) => {
            const { id, name, genre, imageUrl } = app;
            const appInfo = {
              name,
              genre,
              imageUrl,
            };
            return <RecommandItem key={id} {...appInfo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Recommand;
