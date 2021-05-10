import React from 'react';
import Course from './Course';

function NameList(){
    const namelist  = [{
        "id" : 1,
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
          },
          "location": {
            
            "city": "kilcoole"
           
          },
          "email": "brad.gibson@example.com",
          "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "picture": {
            
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            
          }},
          {
            "id" : 2,
            "name":{"title":"Ms","first":"Linnea","last":"Annala"},
            "location": {
              
              "city": "Baticlo"
             
            },
            "email":"linnea.annala@example.com",
            "dob": {
              "date": "1993-07-20T09:44:18.674Z",
              "age": 26
            },
            "picture": {
              
              "medium":"https://randomuser.me/api/portraits/med/women/79.jpg"
              
            }
          }
          ,
          {
            "id" : 3,
            "name": {
                "title": "mr",
                "first": "brad",
                "last": "gibson"
              },
              "location": {
                
                "city": "kilcoole"
               
              },
              "email": "brad.gibson@example.com",
              "dob": {
                "date": "1993-07-20T09:44:18.674Z",
                "age": 26
              },
              "picture": {
                
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                
              }
          }
          ,
    ];
    const nameListComponent = ()=>{
        return(
            namelist.map(aName => {
                return(
                    <Course 
                    key = {aName.id}
                    name = {`${aName.name.title} ${aName.name.first}  ${aName.name.last}`} 
                    city = {aName.location.city }  
                    email = {aName.email } 
                    dateofbirthday = {aName.dob.date } 
                    avatar = {aName.picture.medium } 
                />
                )
            })
            
        );
    };
    return(
        <div>
            <h1>Hello React 2021</h1>
            <ul>
                {nameListComponent()}
                 <Course 
                    name = {`${namelist[1].name.title} ${namelist[1].name.first}  ${namelist[1].name.last}`}  
                    city = {namelist[1].location.city }  
                    email = {namelist[1].email } 
                    dateofbirthday = {namelist[1].dob.date } 
                    avatar = {namelist[1].picture.medium } 
                />
                 <Course 
                    name = {`${namelist[2].name.title} ${namelist[2].name.first}  ${namelist[2].name.last}`}  
                    city = {namelist[2].location.city }  
                    email = {namelist[2].email } 
                    dateofbirthday = {namelist[2].dob.date} 
                    avatar = {namelist[2].picture.medium } 
                />
               
            </ul>
        </div>
        
    );
}

export default NameList;