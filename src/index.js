import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-client-preset';
import {ApolloProvider} from 'react-apollo';

import Routes from '../src/routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql',
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
