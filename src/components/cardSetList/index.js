import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const cardSetList = ({cardSets, loading}) => {
  if (loading) {
    return <p> Loading...</p>;
  } else {
    return cardSets.map((cs) => (
      <div key={cs.id} id={cs.id}>
        <h2>{cs.name}</h2>
      </div>
    ));
  }
};

const cardSetsQuery = gql`
  query cardSetsQuery($schemeChoice: ID) {
    cardSets(phonicSchemeUuid: $schemeChoice) {
      name
      id
      flashcards {
        grapheme {
          grapheme
        }
      }
    }
  }
`;

export default graphql(cardSetsQuery, {
  props: ({ownProps, data: {loading, cardSets}}) => ({
    variables: {
      schemeChoice: ownProps.schemeChoice,
    },
    cardSets: cardSets,
    loading: loading,
  }),
})(cardSetList);
