import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
  state = {
    lastSelectedOption: ''
  };

  // Sequence: 
  //    1. props.selectedOption is cleared. 
  //    2. Modal is content updated.
  //    3. Modal then closes.
  // This causes the dialog button to jump upward.
  // Instead store selected option in a local state variabe and only change
  // when we have a new non empty selected option.
  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.selectedOption) {
        return { 
            lastSelectedOption: nextProps.selectedOption
        };
    } else {
        return null;
    }
  };

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={() => this.props.clearSelectedOption()}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal'
        ariaHideApp={false}
      >
        <h3 className='modal__title' >Select Option</h3>
        {this.state.lastSelectedOption && 
          <p className='model__body' >{this.state.lastSelectedOption}</p>}
        <button  className='button' onClick={() => this.props.clearSelectedOption()}>
          Okay
        </button>
      </Modal>
    );
  };
};
