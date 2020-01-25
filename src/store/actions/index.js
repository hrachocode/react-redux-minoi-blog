import * as actionTypes from '../actionTypes';

const registerUser = user => ({ type: actionTypes.REGISTER_USER, user });
const loginUser = user => ({ type: actionTypes.LOGIN_USER, user });
const logOutUser = () => ({ type: actionTypes.LOGOUT_USER });
const createPost = post => ({ type: actionTypes.CREATE_POST, post });
const editPost = post => ({ type: actionTypes.EDIT_POST, post });
const commentPost = comment => ({ type: actionTypes.COMMENT_POST, comment });
const errorIndication = errorMessage => ({ type: actionTypes.ERROR_MESSAGE, errorMessage })

export {
      registerUser,
      loginUser,
      logOutUser,
      createPost,
      editPost,
      commentPost,
      errorIndication
};