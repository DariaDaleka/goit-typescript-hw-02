import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface Image {
  urls: {
    full: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: Image | null;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    width: "80%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, closeModal, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image modal"
      shouldCloseOnOverlayClick={true}
    >
      {image ? (
        <img
          src={image.urls.full}
          alt={image.alt_description}
          className={s.img}
        />
      ) : (
        <div>No Image Available</div> // Отображение, если нет изображения
      )}
    </Modal>
  );
};

export default ImageModal;
