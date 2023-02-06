import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalSlice";

function Overlay({ children, canOverlayClose }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    if (!canOverlayClose) return;

    setTimeout(() => {
      dispatch(modalActions.closeModal());
    }, 100);
  };

  return (
    <div
      onClick={(event) => {
        if (event.target.id !== "overlay") return;
        closeModal();
      }}
      onMouseLeave={closeModal}
      className="bg-transparent w-full h-full absolute z-20 top-0 left-0 flex items-center justify-center"
      id="overlay"
    >
      {children}
    </div>
  );
}

export default Overlay;
