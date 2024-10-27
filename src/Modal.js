import React from 'react';
import './Modal.css'; // CSS 스타일을 별도로 적용

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={imageSrc} alt="확대된 이미지" />
            </div>
        </div>
    );
};

export default Modal;
