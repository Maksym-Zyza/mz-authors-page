import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModalBtn } from './closeModalBtn.svg';
import PropTypes from 'prop-types';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.content}>
        <CloseModalBtn className={css.closeBtn} onClick={handleClose} />
        {children}
        <div className={css.btn_wrapper}>
          <button className={css.cancelBtn} onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
