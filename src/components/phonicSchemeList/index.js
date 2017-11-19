import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const phonicSchemesList = (props) => {
  if (props.loading) {
    return <p> Loading...</p>;
  } else {
    return props.phonicSchemes.map((ps) => (
      <div key={ps.id} id={ps.id} onClick={props.onClick}>
        <h2>{ps.name}</h2>
        <p>{ps.description}</p>
      </div>
    ));
  }
};

const phonicSchemeListQuery = gql`
  query PhonicsSchemeQuery {
    phonicSchemes {
      id
      name
      description
    }
  }
`;

export default graphql(phonicSchemeListQuery, {
  props: ({ownProps, data: {loading, phonicSchemes}}) => ({
    phonicSchemes: phonicSchemes,
    loading: loading,
  }),
})(phonicSchemesList);
