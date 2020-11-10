import React from 'react';
import classnames from 'classnames';
// import { MdSearch } from 'react-icons/md';

export interface Props {
  value?: string;
  handler: () => void;
}

const Search = ({ handler, value = '' }: Props) => {
  return (
    <div className={classnames('c-search-container')}>
      {/* <div className={classnames('c-search-icon-container')}>
        <MdSearch className={classnames('c-search-icon')} />
      </div> */}
      <div className={classnames('c-search-input-container')}>
        <input
          className={classnames('c-search-input')}
          onChange={handler}
          value={value}
          placeholder={'搜索'}
        />
      </div>
    </div>
  );
};

export default Search;
