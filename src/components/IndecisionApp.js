import React from 'react';
import { connect } from 'react-redux';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
import { 
    setOptions, 
    pickOption,
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
    render () {
        const title = "Indecision";
        const subtitle = "Put you life in the hands of a computer.";
        const options = ['thing1', 'thing2', 'thing3'];
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <div className='container'>
                    <Action 
                        hasOptions={this.props.options.length > 0}
                        pickOption={this.props.pickOption}
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
                    clearSelectedOption={this.clearSelectedOption}
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
    pickOption: () => dispatch(pickOption()),
    addOption: (option) => dispatch(addOption(option)),
    clearSelectedOption: () => dispatch(clearSelectedOption())
});

export default connect(mapStateToProps, mapDispatchToProps)(IndecisionApp);
