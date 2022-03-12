import React from 'react'

function MiniCard(props) {
    return ( 
        <>
            <div className="card h-100">
                <i className={props.icon} id="icon"></i>
                <div className="card-body">
                    <p className="card-text"> {props.text} </p>
                </div>
            </div>
        </>
     );
}

export default MiniCard;