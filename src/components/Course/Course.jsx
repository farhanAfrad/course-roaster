import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from 'react-icons/go';

const Course = ({course, handleSelectToCart}) => {
    const {cover_img, course_name, short_details, credit_hour, price} = course;
    return (
        <div className='p-4 bg-white rounded-xl'>
            <img className='w-full' src={cover_img} alt="" />
            <h3 className='text-lg font-semibold my-4'>{course_name}</h3>
            <p className='text-sm text-gray-700 leading-6'>{short_details}</p>
            <div className='flex justify-between my-5 text-gray-700'>
                <p className='flex items-center gap-3 font-medium '><FiDollarSign /> Price: {price}</p>
                <p className='flex items-center gap-3 font-medium'><GoBook /> Credit: {credit_hour}</p>
            </div>
            <button className='text-white font-semibold bg-blue-500 w-full py-2 rounded-lg' onClick={()=>handleSelectToCart(course)}>Select</button>
        </div>
    );
};

Course.propTypes={
    course: PropTypes.object,
    handleSelectToCart: PropTypes.func
}
export default Course;