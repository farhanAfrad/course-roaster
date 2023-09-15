import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'


const Courses = ({handleSelectToCart}) => {
    // state for load data
    const [courses,setCourses] = useState([]);

    // useEffect with no dependency for fetching data
    useEffect(()=>{
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    
    return (
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course => <Course 
                    handleSelectToCart={handleSelectToCart} 
                    key={course.id} 
                    course={course}>
                    </Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleSelectToCart: PropTypes.func
}
export default Courses;