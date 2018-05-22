import React from 'react';

export const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        <button 
            className='button button--link'
            onClick={(e) =>
                props.deleteOption(props.optionText)
            }
        >
            Remove
        </button>
    </div>
);

export default Option;
