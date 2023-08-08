import React from 'react'
// import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Buttons = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div to="/services" className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize} `}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </div>
    )
}