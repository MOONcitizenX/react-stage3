import React from 'react';
import ReactDOM from 'react-dom';
import s from './Popup.module.css';

interface PopupProps {
  text: string;
  onClick: () => void;
}

const Popup = ({ text, onClick }: PopupProps) => {
  const modalRoot = document.getElementById('modal') as HTMLDivElement;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={s.modal}>
          {text}
          <button type="button" className={s.modalClose} onClick={onClick}>
            x
          </button>
        </div>,
        modalRoot
      )}
    </React.Fragment>
  );
};

export default Popup;
