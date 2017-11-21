import React from 'react';
import {Cell, Grid} from 'react-mdl';

const Flashcards = (props) => {
  const graphemes = props.miniFlashcards.flashcards.filter(
    (gr) => gr.grapheme !== null
  );
  return graphemes.map((gr) => (
    <Grid key={gr.id} id={gr.id} className="demo-grid-ruler">
      <Cell col={1} style={{fontSize: '0.5em'}}>
        <p>{gr.grapheme.grapheme}</p>
      </Cell>
    </Grid>
  ));
};

export default Flashcards;
