import './modal.scss';

const Modal = ({ isOpen, closeModal, previewImg }) => {

    return (
        isOpen ? 
            <div className="modal__overlay" onClick={closeModal}>
                <div className="modal">
                    <div className="modal__content">
                        <span className="modal__close" onClick={closeModal}>&times;</span>
                        <img src={previewImg} alt="previewImg" className='modal__img'/>
                    </div>
                </div>
            </div>
        : null
    );
}

export default Modal;