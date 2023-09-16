
import PropTypes from 'prop-types'
// import List from '../List/List';

const Cart = ({courseIncart}) => {
    //  console.log(courseIncart);
    // const {course_name} = courseIncart;
    
    // console.log(course_name);
    return (
        <div className="w-1/4 bg-white p-6 rounded-xl h-min">
            <h3 className="mb-4 text-lg font-bold text-blue-500">Credit Hour Remaining 7 hr</h3>
            <div className="pt-4 pb-6 border-t-2 border-b-2">
                <h2 className="text-xl font-bold">Course Name</h2>
                <ol className="list-decimal ml-5 mt-5 text-gray-700">
                   {
                    courseIncart.map(course => <li key={course.id}>{course.course_name}</li>)
                   }

                </ol>
            </div>
            
            <p className="py-4 border-b-2 text-gray-600 font-semibold">Total Credit Hour : 13</p>
            <p className="py-4 text-gray-600 font-semibold">Total Price : 48000 USD</p>
        </div>
    );
};

Cart.propTypes = {
    courseIncart: PropTypes.array
}
export default Cart;