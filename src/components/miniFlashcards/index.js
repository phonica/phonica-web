import React from 'react';
import sortBy from 'lodash.sortby';

const Flashcards = (props) => {
  const graphemes = props.miniFlashcards.flashcards.filter(
    (gr) => gr.grapheme !== null
  );
  const orderedGraphemes = sortBy(graphemes, ['order']);
  return orderedGraphemes.map((gr) => (
    <div key={gr.uuid} id={gr.uuid} className="demo-grid-ruler">
      <p style={{margin: '5px'}}>{gr.grapheme.grapheme}</p>
    </div>
  ));
};

export default Flashcards;
