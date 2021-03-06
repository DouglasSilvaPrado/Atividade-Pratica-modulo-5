import React from 'react'

function Card(props) {
    return ( 
        <>
            <div className="card h-100">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">{props.subTitle}</p>
                    <p className="card-text"><strike>{props.priceOld}</strike></p>
                    <p className="card-text primary-color h2">
                        $ {props.price} <span className="secondary-color fs-6">/por pessoa</span>
                    </p>
                </div>
            </div>
        </>
     );
}

export default Card;