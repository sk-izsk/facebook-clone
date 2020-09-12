import React, { createContext, useContext, useReducer } from 'react';

export interface StateContextProviderProps {
  initialState?: any;
  reducer?: any;
}

const StateContext = createContext(undefined);

const StateContextProvider: React.FC<StateContextProviderProps> = ({ initialState, reducer, children }) => {
  return <StateContext.Provider value={useReducer(reducer, initialState) as any}>{children}</StateContext.Provider>;
};

const useStateValue: any = () => useContext(StateContext);

export { StateContextProvider, StateContext, useStateValue };
