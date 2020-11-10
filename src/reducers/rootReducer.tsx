import { ActionType, StoreStateType } from '@types';
import { SET_TOP_FREE_APP, SET_RECOMMAND_APP } from '@constants';

const Reducer = (state: StoreStateType, action: ActionType): StoreStateType => {
  switch (action.type) {
    case SET_TOP_FREE_APP: {
      return state;
    }
    case SET_RECOMMAND_APP: {
      return state;
    }
    default:
      return state;
  }
};

export default Reducer;
