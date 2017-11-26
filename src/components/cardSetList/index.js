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
        key={cs.uuid}
        id={cs.uuid}
        onClick={props.handleSetChoice}
        style={{margin: 'auto'}}
      >
        <Grid className="demo-grid-1" style={{display: 'flex'}}>
          <Card
            shadow={1}
            style={{width: '256px', height: '120px', background: '#fff'}}
          >
            <CardTitle
              expand
              style={{
                justifyContent: 'center',
              }}
            >
              <h4 style={{fontSize: '3em', marginTop: '0'}}>{cs.name}</h4>
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
      uuid
      flashcards {
        order
        uuid
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
