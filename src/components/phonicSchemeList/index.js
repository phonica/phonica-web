import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const phonicSchemesList = ({data: {phonicSchemes = []}}, props) =>
  phonicSchemes.map((ps) => (
    <div key={ps.id} onClick={props.onClick}>
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

export default graphql(phonicSchemeListQuery)(phonicSchemesList);
