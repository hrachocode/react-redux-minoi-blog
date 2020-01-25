import React from 'react';
import { Switch } from 'react-router-dom';

import { routerConfig } from '../configs/routerConfig';
import { RouteWithSubRoutes } from './Authentication/utils';
import Header from './Includes/Header';

const App = () => {
      return (
            <div className='container'>
                  <Header />
                  <Switch>
                        {routerConfig.map((route, i) => (
                              <RouteWithSubRoutes key={i} {...route} />
                        ))}
                  </Switch>
            </div>
      );
};

export default App;
