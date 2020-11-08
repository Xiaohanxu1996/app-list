import { ActionType, StoreStateType } from '@types';

const Reducer = (state: StoreStateType, action: ActionType): StoreStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Reducer;
