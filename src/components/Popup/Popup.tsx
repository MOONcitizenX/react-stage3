import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './Popup.module.css';

interface PopupProps {
  text: string;
  onClick: () => void;
}

export default class Popup extends Component<PopupProps> {
  render() {
    const modalRoot = document.getElementById('modal') as HTMLDivElement;
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <div className={s.modal}>
            {this.props.text}
            <button type="button" className={s.modalClose} onClick={this.props.onClick}>
              x
            </button>
          </div>,
          modalRoot
        )}
      </React.Fragment>
    );
  }
}
