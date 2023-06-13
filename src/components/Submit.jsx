import React from 'react';

const Submit = (props) => {
    return (
        <button
            onClick={props.onClick}
            key={props.key}
            className='mt-5 rounded-lg bg-[--DarkSlateGrey] p-4 font-bold text-white hover:bg-gradient-to-r hover:from-[#FE5279] hover:to-[#FD6A3C] hover:shadow-lg hover:shadow-[#fe527a67]'
        >
            {props.text}
        </button>
    );
};

export default Submit;
