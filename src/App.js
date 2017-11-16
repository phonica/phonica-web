import React, { Component } from 'react';
import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';
import Phonicschemesdata from './phonicSchemeList';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql'
  }),
  opts: {
    mode: 'no-cors'
  },
  cache: new InMemoryCache().restore({})
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Phonica</h1>
          </header>
          <Phonicschemesdata />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
