import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const Home = ({data: {phonicSchemes = []}}) =>
  phonicSchemes.map((ps) => (
    <div key={ps.id}>
      <h2>{ps.name}</h2>
      <p>{ps.description}</p>
    </div>
  ));

const phonicSchemeListQuery = gql`
  query PhonicsSchemeQuery {
    phonicSchemes {
      id
      name
      description
    }
  }
`;

export default graphql(phonicSchemeListQuery)(Home);
