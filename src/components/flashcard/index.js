import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Card, Grid, CardTitle} from 'react-mdl';

const flashcard = ({handleClick, currentCard, loading, cardSets}) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    const cardSet = cardSets[0].flashcards;
    const numberOfCards = cardSet.length;
    const fc = cardSet[currentCard];
    return (
      <Grid
        id={fc.id}
        key={fc.id}
        className="demo-grid-1"
        onClick={(e) => handleClick(e, numberOfCards)}
      >
        <Card
          shadow={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '256px',
            height: '150px',
            background: '#3E4EB8',
          }}
        >
          <CardTitle>
            <p style={{color: '#fff', fontSize: '5em'}}>
              {fc.grapheme.grapheme}
            </p>
          </CardTitle>
        </Card>
      </Grid>
    );
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
