import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const flashcard = (props) => {
  console.log(props);
  if (props.loading) {
    return <p>Loading...</p>;
  } else {
    return props.cardSets[0].flashcards.map((fc) => (
      <div key={fc.id} id={fc.id}>
        <h1>{fc.grapheme.grapheme}</h1>
      </div>
    ));
  }
};

const flashcardQuery = gql`
  query flashcardQuery($setChoice: ID) {
    cardSets(uuid: $setChoice) {
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

export default graphql(flashcardQuery, {
  props: ({ownProps, data: {loading, cardSets}}) => ({
    // variables: {
    //   schemeChoice: ownProps.schemeChoice,
    // },
    cardSets,
    loading,
  }),
})(flashcard);
