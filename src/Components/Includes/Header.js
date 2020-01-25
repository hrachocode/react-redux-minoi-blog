import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../store/actions';

const Header = () => {
      const user = useSelector(state => state.authReducer.user);
      const dispatch = useDispatch();
      return (
            <div>
                  <nav className="navbar navbar-expand-sm bg-dark">
                        <ul className="navbar-nav">
                              <li className="nav-item">
                                    <Link to={'/'} className="nav-link" >Main</Link>
                              </li>
                              {user.logged === '0' ? 
                              <div className='d-flex'>
                                    <li className="nav-item">
                                          <Link to={'/login'} className="nav-link" >Log in</Link>
                                    </li> 
                                    <li className="nav-item">
                                          <Link to={'/register'} className="nav-link" >Register</Link>
                                    </li> 
                              </div>
                              :
                              <div className='d-flex'>
                                    <li className="nav-item">
                                          <Link to={'/add-post'} className="nav-link" >Add Post</Link>
                                    </li>
                                    <li className="nav-item">
                                          <button type="button" className="btn btn-primary" onClick={event => dispatch( logOutUser() )}>Log out</button>
                                    </li>
                              </div>
                              }
                        </ul>
                  </nav>
            </div>
      );
}

export default Header;
