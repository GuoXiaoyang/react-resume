import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ entry, isOpen, onRequestClose }) =>{
  const style = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)"
    }
  };
  return (
    <ReactModal className="popup-modal mfp-hide" isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <img className="scale-with-grid" src={entry.image.modal} alt={entry.name}/>
      <div className="description-box">
        <h5>{entry.name}</h5>
        <p>{entry.summary}</p>
        <span className="categories">
          <i className="fa fa-tag"/>
          {entry.keywords.join(", ")}
        </span>
      </div>
      <div className="link-box">
        <a href={entry.website} target="_blank" rel="noopener noreferrer">
        Details
        </a>
        <a className="popup-modal-dismiss" onClick={onRequestClose}>Close</a>
      </div>
    </ReactModal>
  );
}

export default Modal;