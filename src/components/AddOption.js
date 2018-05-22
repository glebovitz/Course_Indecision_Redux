import React from 'react';

export default class AddOption extends React.Component {
    state = {
        inputValue: '',
        optionCount: 0 //used to store previous optionCount prop
    };

    // used changes in optionCount to determine that we successfully added
    // a new option. Previous optionCount is stored in local state.
    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.optionCount !== prevState.optionCount) {
            return { 
                inputValue: '',
                optionCount: nextProps.optionCount,
            };
        } else {
            return null;
        }
    };
    handleAddOption = (e) => {
        e.preventDefault();
        this.props.addOption(this.state.inputValue);
    };
    handleOnChange = (e) => {
        const inputValue = e.target.value;
        this.setState(() => ({
            inputValue
        }));
    };
  render() {
      return (
        <div>
            {!!this.props.error && <p className='add-option-error'>{this.props.error}</p>}
            <form className='add-option' onSubmit={this.handleAddOption}>
                <input 
                    className='add-option__input'
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleOnChange}
                />
                <button className='button'>Add Option</button>
            </form>
        </div>
      );
  }
}
