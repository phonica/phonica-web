import React from 'react';

const Flashcards = (props) => {
  console.log('props in flashcards', props.miniFlashcards.flashcards);
  return props.miniFlashcards.flashcards.map((gr) => (
    <div key={gr.id} id={gr.id}>
      <h3>{gr.grapheme.grapheme}</h3>
    </div>
  ));
};

export default Flashcards;
