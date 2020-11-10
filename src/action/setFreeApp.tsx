import { SET_TOP_FREE_APP } from '@constants';
import { ActionType, AppInfoType } from '@types';

const setFreeApp = (data: AppInfoType[]): ActionType => {
  return {
    type: SET_TOP_FREE_APP,
    data: data,
  };
};

export { setFreeApp };
