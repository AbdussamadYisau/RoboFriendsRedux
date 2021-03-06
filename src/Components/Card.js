import React from 'react';
import './Card.css';

const Card = ({name,email,id}) => {
        return(
            <div className= "m-2 p-1 card shadow text-center" style = {{width: '18rem', backgroundColor: 'lightgreen' }}>
                <img src = {`https://robohash.org/${id}?200x200`} className = "card-img-top" alt = "robotPicture"/>
                <div card-body = "true">
                    <h2 card-title = "true">{name}</h2>
                    <p card-text = "true">{email}</p>
                </div>
            </div>


        );
 }

export default Card;