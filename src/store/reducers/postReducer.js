import * as actionTypes from '../actionTypes';

let initialState = {
      post: [],
      comments: []
};

const postReducer = (state = initialState, action) => {
      switch (action.type) {
            case actionTypes.CREATE_POST:
                  return {
                        ...state,
                        post: [
                              ...state.post,
                              action.post
                        ]
                  };
            case actionTypes.EDIT_POST:
                  return {
                        ...state,
                        post: state.post.map((post, index) => post.id === action.post.id ? {
                              ...post,
                              title: action.post.title,
                              category: action.post.category,
                              text: action.post.text
                        } : post)
                  };
            case actionTypes.COMMENT_POST:
                  return {
                        ...state,
                        comments: [
                              ...state.comments,
                              action.comment
                        ]
                  };
            default:
                  return state;
      };
};

export default postReducer;