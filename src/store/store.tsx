import React, { createContext, useReducer, FunctionComponent } from 'react';
import { StoreStateType, Theme } from '@types';
import { Reducer } from '@reducers';

const initialState = {
  topGrowApps: [],
  topFreeApps: [],
  loading: true,
  page: 1,
  searchTerm: '',
  theme: Theme.Dark,
};

const Context = createContext<{
  state: StoreStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const Store: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context };
export default Store;
