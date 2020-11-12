import { SET_SEARCH_TERM } from '@constants';
import { ActionWithStringDataType } from '@types';

const setSearchTerm = (term: string): ActionWithStringDataType => {
  return {
    type: SET_SEARCH_TERM,
    term: term,
  };
};

export { setSearchTerm };
