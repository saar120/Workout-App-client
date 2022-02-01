import React from "react";
import { OverlayContainer, ModalContainer } from "./AddExercise.styled";

import SearchBar from "./SearchBar/SearchBar";

function AddExerciseModal({ setShowAddExercise, addExercise }) {
  const closeModal = () => {
    setShowAddExercise(false);
  };

  return (
    <>
      <OverlayContainer onClick={closeModal} />
      <ModalContainer>
        <SearchBar addExercise={addExercise} closeModal={closeModal} />
      </ModalContainer>
    </>
  );
}

export default AddExerciseModal;
