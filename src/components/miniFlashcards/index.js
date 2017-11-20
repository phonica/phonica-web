import React from 'react';

const Flashcards = (props) => {
  const graphemes = props.miniFlashcards.flashcards.filter(
    (gr) => gr.grapheme !== null
  );
  return graphemes.map((gr) => (
    <div key={gr.id} id={gr.id}>
      <h3>{gr.grapheme.grapheme}</h3>
    </div>
  ));
};

export default Flashcards;
