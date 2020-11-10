import { SET_RECOMMAND_APP } from '@constants';
import { ActionType } from '@types';

const setRecommandApp = (data: object[]): ActionType => {
  return {
    type: SET_RECOMMAND_APP,
    data: data,
  };
};

export { setRecommandApp };
