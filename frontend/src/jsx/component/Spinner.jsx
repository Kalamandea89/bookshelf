import React from 'react'
import './Spinner.css';
export const Spinner = ({ text = '', size = '5em' }) => {
    const header = text ? <h4>{text}</h4> : null

/*
        <div className="spinner">
            {header}
            <div className="loader" style={{ height: size, width: size }} />
        </div>
 */
    return (
        <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">{text}</div>
        </div>
    )
}
