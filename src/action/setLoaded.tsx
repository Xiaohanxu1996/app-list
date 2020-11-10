import { SET_LOADED } from '@constants';
import { ActionWithOutDataType } from '@types';

const setLoaded = (): ActionWithOutDataType => {
  return {
    type: SET_LOADED,
  };
};

export { setLoaded };
