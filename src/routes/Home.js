import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const Home = ({data: {phonicSchemes = []}}) =>
  phonicSchemes.map((ps) => (
    <div key={ps.id}>
      {ps.name} - {ps.description}
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
