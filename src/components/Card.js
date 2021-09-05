import React from 'react';
import '../style.css'

const Card = (props) => {
    return (
        <div>
            <div className="card-container">
                <div className="card-user-profile">
                    <div className="card-user-avatar">
                        <img src={props.image} alt="avatar" />
                    </div>
                    <div className="card-user-info">
                        <p className="card-user-name">
                            {props.userName}
                        </p>
                        <p className="card-user-status">
                            Verified Buyer
                        </p>
                    </div>
                </div>
                <div className="card-user-comment">
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
