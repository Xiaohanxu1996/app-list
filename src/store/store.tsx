import React, { createContext, useReducer } from 'react';
import { StoreStateType } from '@types';
import { Reducer } from '@reducers';

const initialState = {
  topGrowApps: [],
  topFreeApps: [],
  loading: true,
  page: 1,
  searchTerm: '',
};

const Context = createContext<{
  state: StoreStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context };
export default Store;
