import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Courseitem.css'

const Courseitem = (props) => {
    const {name,by,fee} = props.course
   
    return (
        <div className ='ml-5 mr-3'>
         
                <h3 className='mb-3 text-primary'><span className='text-dark'>Course Name :</span> {name}</h3> 
                
                <p className ='ml-5'><small>By: {by}</small></p>
                
                <h4>Course Fee: Taka {fee}</h4>
                
                <br/>
                <button className='btn btn-success mb-5' onClick = {() =>props.handdleAddCourse (props.course)}>Enroll Now</button>

        </div>
        
    );
};

export default Courseitem;