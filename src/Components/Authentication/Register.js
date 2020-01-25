import React from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../store/actions';
import { formIterator } from '../utils';

const Register = ({ history }) => {
      const dispatch = useDispatch()
      return (
            <div>
                  <form onSubmit={event => { dispatch( registerUser( formIterator(event) ) ); history.push('/'); } }>
                        <div className="form-group">
                              <label htmlFor="username">Username</label>
                              <input type="text" className="form-control" id="username" required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control" id="password" required />
                        </div>

                        <input type='hidden' id='logged' value='1' />
                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
      );
};

export default Register;