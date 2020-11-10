import { ActionType, StoreStateType } from '@types';
import { SET_TOP_FREE_APP, SET_RECOMMAND_APP } from '@constants';

const Reducer = (state: StoreStateType, action: ActionType): StoreStateType => {
  switch (action.type) {
    case SET_TOP_FREE_APP: {
      const { data } = action;
      return {
        ...state,
        topFreeApps: data,
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
