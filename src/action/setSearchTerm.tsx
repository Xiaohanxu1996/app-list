import { SET_SEARCH_TERM } from '@constants';

const setSearchTerm = (term: string) => {
  return {
    type: SET_SEARCH_TERM,
    term: term,
  };
};

export { setSearchTerm };
