import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export const RouteWithSubRoutes = (route) => {
      return (
            <Route
                  path={route.path}
                  render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                  )}
            />
      );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const AuthProtection = ({ children, ...rest }) => {
      const user = useSelector(state => state.authReducer.user);
      return (
            <Route
                  {...rest}
                  render={({ location }) =>
                        user.logged === '1' ? (
                              children
                        ) : (
                                    <Redirect
                                          to={{
                                                pathname: "/",
                                                state: { from: location }
                                          }}
                                    />
                              )
                  }
            />
      );
};

export const checkUserExist = (userData, currentUser) => {
      if((currentUser && userData) && (currentUser.username === userData.username && currentUser.password === userData.password) ){
            return userData;
      }else{
            return null;
      }
};