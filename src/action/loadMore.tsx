import { LOAD_MORE } from '@constants';
import { ActionWithOutDataType } from '@types';

const loadMore = (): ActionWithOutDataType => {
  return {
    type: LOAD_MORE,
  };
};

export { loadMore };
