import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Card, Button, CardTitle} from 'react-mdl';

const flashcard = ({
  returnClick,
  handleClick,
  currentCard,
  loading,
  cardSets,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  } else {
    const cardSet = cardSets[0].flashcards;
    const numberOfCards = cardSet.length;
    const fc = cardSet[currentCard];
    return (
      <Card
        id={fc.id}
        key={fc.id}
        shadow={1}
        style={{
          justifyContent: 'center',
          width: '100vmin',
          marginTop: '20px',
          height: '80vmin',
          userSelect: 'none',
          margin: 'auto',
        }}
      >
        <CardTitle
          style={{width: '100%'}}
          onClick={(e) => handleClick(e, numberOfCards)}
        >
          <p
            style={{
              height: '80vmin',
              lineHeight: 'normal',
              margin: 'auto',
              fontSize: '55vmin',
            }}
          >
            {fc.grapheme.grapheme}
          </p>
        </CardTitle>
        <Button onClick={returnClick} colored style={{alignSelf: 'flex-end'}}>
          Return
        </Button>
      </Card>
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
