import { ActionType, StoreStateType } from '@types';
import {
  SET_TOP_FREE_APP,
  SET_RECOMMAND_APP,
  SET_LOADED,
  LOAD_MORE,
  SET_SEARCH_TERM,
} from '@constants';

const Reducer = (state: StoreStateType, action: ActionType): StoreStateType => {
  switch (action.type) {
    case SET_TOP_FREE_APP: {
      const { data } = action;
      return {
        ...state,
        topFreeApps: data,
      };
    }
    case SET_LOADED: {
      const { topGrowApps, topFreeApps } = state;
      if (topFreeApps.length !== 0 && topGrowApps.length !== 0) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: true,
        };
      }
    }
    case SET_SEARCH_TERM: {
      const { term } = action;
      return {
        ...state,
        searchTerm: term ? term : '',
      };
    }
    case LOAD_MORE: {
      const { page } = state;
      return {
        ...state,
        page: page + 1,
      };
    }
    case SET_RECOMMAND_APP: {
      const { data } = action;
      return {
        ...state,
        topGrowApps: data,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
