import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-client-preset';
import {ApolloProvider} from 'react-apollo';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import Routes from '../src/routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://serene-sands-14266.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
