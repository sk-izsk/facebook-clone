const initialState = {
  user: null,
};

const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export { reducer, actionTypes, initialState };
