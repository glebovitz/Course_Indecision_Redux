import React from 'react';
import { connect } from 'react-redux';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import { 
    setOptions, 
    selectOption,
    addOption,
    clearSelectedOption 
} from '../actions/options';

export class IndecisionApp extends React.Component {
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.props.setOptions(options);
            };
        } catch (e) {
            // NOTHING
        };
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.options.length !== this.props.options.length) {
            const json = JSON.stringify(this.props.options);
            localStorage.setItem('options', json);
        }
    };
    pickOption = () => {
        const randomNum = Math.floor(Math.random() * this.props.options.length);
        const option = this.props.options[randomNum];
        this.props.selectOption(option);
    };
    render () {
        const title = "Indecision";
        const subtitle = "Put you life in the hands of a computer.";
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <div className='container'>
                    <Action 
                        hasOptions={this.props.options.length > 0}
                        pickOption={this.pickOption}
                    />
                    <div className='widget'>
                    <Options />
                    <AddOption
                        addOption={this.props.addOption}
                        optionCount={this.props.options.length}
                        error={this.props.error}
                    />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.props.selectedOption}
                    clearSelectedOption={this.props.clearSelectedOption}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        options: state.options.options,
        selectedOption: state.options.selectedOption,
        error: state.options.error
    };
};

const mapDispatchToProps = (dispatch) => ({
    setOptions: (options) => dispatch(setOptions(options)),
    selectOption: (option) => dispatch(selectOption(option)),
    addOption: (option) => dispatch(addOption(option)),
    clearSelectedOption: () => dispatch(clearSelectedOption())
});

export default connect(mapStateToProps, mapDispatchToProps)(IndecisionApp);
