import React from 'react';

const Avatar = (props) => {
    return(
        <div>
            <img
                className="circle-img"
                src = {props.img}
                alt = {props.name}
            />
        </div>
    );
}

export default Avatar;