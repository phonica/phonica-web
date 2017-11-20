import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import Miniflashcard from '../miniFlashcards';

const cardSetList = (props) => {
  if (props.loading) {
    return <p> L1oading...</p>;
  } else {
    return props.cardSets.map((cs) => (
      <div key={cs.id} id={cs.id} onClick={props.handleSetChoice}>
        <h2>{cs.name}</h2>
        <Miniflashcard miniFlashcards={cs} />
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
        id
        grapheme {
          grapheme
        }
      }
    }
  }
`;

export default graphql(cardSetsQuery, {
  props: ({ownProps, data: {loading, cardSets}}) => ({
    // variables: {
    //   schemeChoice: ownProps.schemeChoice,
    // },
    cardSets,
    loading,
  }),
})(cardSetList);
