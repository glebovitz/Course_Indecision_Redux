import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={() => props.clearSelectedOption()}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title' >Select Option</h3>
    {props.selectedOption && <p className='model__body' >{props.selectedOption}</p>}
    <button  className='button' onClick={() => props.clearSelectedOption()}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
