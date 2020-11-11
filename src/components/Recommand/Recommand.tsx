import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import classnames from 'classnames';
import { Context } from '@store';
import RecommandItem from './RecommandItem';

const Recommand = () => {
  const { state } = useContext(Context);
  const { topGrowApps, searchTerm } = state;
  const [filteredResult, setfilteredResult] = useState(topGrowApps);

  useEffect(() => {
    if (searchTerm !== '') {
      const fuse = new Fuse(topGrowApps, { keys: ['name', 'genre'] });
      const filteredResults = fuse.search(searchTerm);
      const parsedResults = filteredResults.map((app) => {
        const { item } = app;
        return item;
      });
      setfilteredResult(parsedResults);
    } else {
      setfilteredResult(topGrowApps);
    }
  }, [topGrowApps, searchTerm]);

  return (
    <>
      <div className={classnames('c-recommand')}>
        <div className={classnames('c-recommand-header')}>推介</div>
        <div className={classnames('c-recommand-container')}>
          {filteredResult.map((app) => {
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
