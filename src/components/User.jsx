import React from 'react';

function User (props){
    return(
    <div className="user">
        <img src={props.profilePic} className="profilePic" />
        <h1> {props.firstName} </h1>
        <h1> {props.lastName} </h1>
    </div>
    )
}

export default User