import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

type Props = {
  searchTerm: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ handler, searchTerm = '' }: Props) => {
  return (
    <div className={classnames('c-search-container')}>
      <div className={classnames('c-search-input-container')}>
        <input
          className={classnames('c-search-input')}
          onChange={handler}
          value={searchTerm}
          placeholder={'搜索'}
        />
      </div>
    </div>
  );
};

export default Search;
