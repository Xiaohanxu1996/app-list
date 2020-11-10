import { SET_TOP_FREE_APP } from '@constants';
import { ActionType } from '@types';

const setFreeApp = (data: object[]): ActionType => {
  return {
    type: SET_TOP_FREE_APP,
    data: data,
  };
};

export { setFreeApp };
