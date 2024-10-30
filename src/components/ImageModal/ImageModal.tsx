import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { Image } from '../../types';


Modal.setAppElement('#root');

interface ImageModalProps {
  image: Image | null; 
  onClose: () => void;  
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null; 

  const formattedDate = image.created_at
    ? new Date(image.created_at).toLocaleDateString('en-GB')
    : 'No date';

  const formattedDescription = image.alt_description
    ? image.alt_description.charAt(0).toUpperCase() + image.alt_description.slice(1)
    : 'No description';

  return (
    <Modal
      isOpen={!!image}   
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className={s.content}>
        <img
          src={image.urls.regular}
          alt={formattedDescription}
          className={s.img}
        />
        <p className={s.description}>{formattedDescription}</p>
        <p className={s.date}>Uploaded on: {formattedDate}</p>
        <button onClick={onClose} className={s.closeButton}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
