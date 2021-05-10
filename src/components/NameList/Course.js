import React from 'react';
import moment from 'moment';

function Course(props){
    return(
        <div>
            <p><img src = {props.avatar}/> {props.name}</p>
            <p>{props.city}</p>
            <p>{props.email}</p>
    <p> {moment(props.dateofbirthday).format('DD-MM-YYYY')}</p>
        </div>
    );
    
}

export default Course;