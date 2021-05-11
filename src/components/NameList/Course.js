import React from 'react';
import moment from 'moment';
import  './Course.css';

function Course(props){
    return(
        <div>
            <p style = {{color:'red'}}><img src = {props.avatar} alt = {props.name}/> {props.name}</p>
            <p>{props.city}</p>
            <p>{props.email}</p>
    <p> {moment(props.dateofbirthday).format('DD-MM-YYYY')}</p>
        </div>
    );
    
}

export default Course;