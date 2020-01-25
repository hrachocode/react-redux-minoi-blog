import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, errorIndication } from '../../store/actions';
import { formIterator } from '../utils';
import { checkUserExist } from './utils';

const Login = ({ history }) => {
      const dispatch = useDispatch();
      const currentUser = useSelector(state => state.authReducer.user);
      const error = useSelector(state => state.authReducer.errorMessage);

      return (
            <div>
                  <form onSubmit={event => {
                        if (checkUserExist(formIterator(event), currentUser)) {
                              dispatch(loginUser(checkUserExist(formIterator(event), currentUser)));
                              history.push('/');
                        } else {
                              dispatch(errorIndication('Invalid Credentials'));
                        }
                  }}>
                        <div className="form-group">
                              <label htmlFor="username">Username</label>
                              <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control" id="password" required />
                        </div>

                        <input type='hidden' id='logged' value='1' />
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                  {error && <div class="alert alert-primary" role="alert">
                        {error}
                  </div>}
            </div>
      );
};

export default Login;
