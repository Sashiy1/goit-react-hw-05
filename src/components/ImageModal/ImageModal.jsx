import Modal from "react-modal";
import css from "./ImageModal.module.css"

function ImageModal({ isOpen, closeModal, photoUrl }) {
  console.log(photoUrl);
  return (
    <Modal overlayClassName={css.overlay} isOpen={isOpen} onRequestClose={closeModal} className={css.modal} >
      <img className={css.modalImg} src={photoUrl} alt="Повний розмір" />
    </Modal>
  );
}


export default ImageModal;
