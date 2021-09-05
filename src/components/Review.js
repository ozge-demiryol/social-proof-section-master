import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function SimpleRating(props) {
    return (
        <div className="rating">
            <div className="rating-container">
                <Rating name="read-only" value="5" readOnly />
                <p className="rating-text">Rated 5 stars in {props.review}</p>   
            </div>
        </div>
    );
}
