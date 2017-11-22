import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Card, CardText, Grid, CardTitle} from 'react-mdl';

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
        style={{margin: 'auto'}}
      >
        <Grid className="demo-grid-1" style={{display: 'flex'}}>
          <Card
            shadow={1}
            style={{width: '256px', height: '120px', background: '#3E4EB8'}}
          >
            <CardTitle
              expand
              style={{
                color: '#fff',
                justifyContent: 'center',
              }}
            >
              <h4 style={{marginTop: '0'}}>{cs.name}</h4>
            </CardTitle>
            <CardText
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'space-around',
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
