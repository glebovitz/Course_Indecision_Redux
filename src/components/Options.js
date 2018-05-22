import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';
import { deleteOptions, deleteOption } from '../actions/options';

export const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.deleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please Add and Option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    deleteOption={props.deleteOption}
                />
            ))
        }
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    deleteOptions: () => dispatch(deleteOptions()),
    deleteOption: (option) => dispatch(deleteOption(option))
});

const mapStateToProps = (state) => {
    return {
        options: state.options.options
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
