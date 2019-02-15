import React from 'react';


const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
        <img src={`https://robohash.org/${props.id}`} alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.name}</p>
            </div>
        </div>
    )
}


export default Card;