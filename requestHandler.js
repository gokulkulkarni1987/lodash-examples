'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import reducers from './src/client/reducers/index';
import routes from './src/client/routes';

function handleRender(req, res) {
  const store = createStore(reducers, {});

  const initialState = {};
  const context = {};
      const reactComponent = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            {routes}
          </StaticRouter>
        </Provider>
      );

      if (context.url) {
        // can use the `context.status` that
        // we added in RedirectWithStatus
        redirect(context.status, context.url);
      } else {
        res.status(200).render('index', { reactComponent, initialState });
      }
}

module.exports = handleRender;
