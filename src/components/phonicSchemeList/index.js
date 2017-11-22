import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Cell, Card, CardText, Grid, CardTitle} from 'react-mdl';

const phonicSchemesList = (props) => {
  if (props.loading) {
    return <p> Loading...</p>;
  } else {
    return props.phonicSchemes.map((ps) => (
      <div
        key={ps.id}
        style={{
          justifyContent: 'center',
        }}
      >
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card
              shadow={1}
              style={{width: '256px', height: '100px', background: '#fff'}}
              id={ps.id}
              onClick={props.onClick}
            >
              <CardTitle>
                <h4
                  style={{
                    marginTop: '0',
                  }}
                >
                  {ps.name}
                </h4>
              </CardTitle>
              <CardText style={{flexGrow: '1'}}>{ps.description}</CardText>
            </Card>
          </Cell>
        </Grid>
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
