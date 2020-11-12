import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';

const Loading: React.FC = () => {
  return (
    <div className={classnames('c-loading-container')}>
      <CircularProgress />
    </div>
  );
};

export { Loading };
