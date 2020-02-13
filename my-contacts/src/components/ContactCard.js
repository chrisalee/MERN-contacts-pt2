import React from 'react';
import Avatar from './Avatar';
import DetailComponent from './DetailComponent';

const ContactCard = (props) => {


    return(
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name"> {props.name} </h2>
                    <Avatar img={props.img}/>
                </div>
                <div className="bottom">
                    <DetailComponent detailInfo = {props.tel} />
                    <DetailComponent detailInfo = {props.email} />
                </div>
            </div>
        </div>
    );
}

export default ContactCard;