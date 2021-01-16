import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`àlert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}