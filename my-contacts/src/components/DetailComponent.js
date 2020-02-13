import React from 'react';

const DetailComponent = (props) => {
    return(
        <div >
            <p className="info"> {props.detailInfo} </p>
        </div>
    );
}

export default DetailComponent;