import React from 'react';
import courseData from '../../courseData';
import { useState } from 'react';
import Courseitem from '../Couseitem/Courseitem';
import './Basic.css';
import Enroll from '../Enroll/Enroll';

const Basic = () => {
    const [courses, setCourses] = useState(courseData)
    const [enroll, setEnroll] = useState([])
    
    const handdleAddCourse = (course) => {
       
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
    }
    return (
        <div className='course-container'>

            <div className="course-item">
                <h2>Basic Courses</h2>
                <h4>
                    {
                        courses.map(course => <Courseitem 
                            handdleAddCourse ={handdleAddCourse}
                            course={course}
                            
                            ></Courseitem>)
                    }
                </h4>
            </div>

            <div className="enroll-section">
                <Enroll enroll ={enroll}></Enroll>    
            </div>

        </div>
    );
};

export default Basic;