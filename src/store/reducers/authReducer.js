import * as actionTypes from '../actionTypes';

let initialState = {
      user: {
            username: '',
            email: '',
            password: '',
            logged: '0'
      },
      errorMessage: ''
};

const authReducer = (state = initialState, action) => {
      switch (action.type) {
            case actionTypes.REGISTER_USER:
                  return {
                        ...state,
                        user: action.user
                  };
            case actionTypes.LOGIN_USER:
                  return {
                        ...state,
                        user: {
                              ...state.user,
                              logged: "1"
                        }
                  };
            case actionTypes.LOGOUT_USER:
                  return {
                        ...state,
                        user: {
                              ...state.user,
                              logged: '0'
                        }
                  };
            case actionTypes.ERROR_MESSAGE:
                  return {
                        ...state,
                        errorMessage: action.errorMessage
                  }
            default:
                  return state;
      };
};

export default authReducer;