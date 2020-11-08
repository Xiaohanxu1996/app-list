import React from 'react';
import classnames from 'classnames';
import RecommandItem from './RecommandItem';
import results from './mockdata.json';

const Recommand = () => {
  return (
    <>
      <div className={classnames('c-recommand')}>
        <div>推介</div>
        <div className={classnames('c-recommand-container')}>
          {results.map((app) => {
            const { name, genres, artworkUrl100: imageUrl } = app;
            const genre = genres[0].name;
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
