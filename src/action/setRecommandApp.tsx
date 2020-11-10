import { SET_RECOMMAND_APP } from '@constants';
import { ActionType, AppInfoType } from '@types';

const setRecommandApp = (data: AppInfoType[]): ActionType => {
  return {
    type: SET_RECOMMAND_APP,
    data: data,
  };
};

export { setRecommandApp };
