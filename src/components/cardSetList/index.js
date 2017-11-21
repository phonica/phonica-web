import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Cell, Card, CardText, Grid, CardTitle} from 'react-mdl';

import Miniflashcard from '../miniFlashcards';

const cardSetList = (props) => {
  if (props.loading) {
    return <p> Loading...</p>;
  } else {
    return props.cardSets.map((cs) => (
      <div
        key={cs.id}
        id={cs.id}
        onClick={props.handleSetChoice}
        style={{width: '80%', margin: 'auto'}}
      >
        <Grid className="demo-grid-1" style={{display: 'flex'}}>
          <Card
            shadow={1}
            style={{width: '256px', height: '150px', background: '#3E4EB8'}}
          >
            <CardTitle
              expand
              style={{alignItems: 'flex-start', color: '#fff'}}
            >
              <h4 style={{marginTop: '0'}}>{cs.name}</h4>
            </CardTitle>
            <CardText
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-around',
              }}
            >
              <Miniflashcard miniFlashcards={cs} />
            </CardText>
          </Card>
        </Grid>
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
