import React, { Component, useState } from 'react'
import './Collapsible.css'




const Collapsible = (props) => {

const [panelState, togglePanel] = useState({open:false})

    return (
        <div>
        <div onClick={e => togglePanel({open:!panelState.open})} 
            className='header'>
            {props.title}
        </div>
        {panelState.open ? (
            <div className='content'>
                {props.children}
            </div>
            ) : null}
        </div>
        );
    
}

export default Collapsible