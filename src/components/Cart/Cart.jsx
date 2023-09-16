
import PropTypes from 'prop-types'
// import List from '../List/List';

const Cart = ({courseIncart,totalCredit,remainingCredit}) => {
    // const {credit_hour} = courseIncart;
    // courseIncart.forEach(course => totalCredit += course.credit_hour);
    return (
        <div className="w-full md:1/3 lg:w-1/4 bg-white p-6 rounded-xl h-min">
            <h3 className="mb-4 text-lg font-bold text-blue-500">Credit Hour Remaining {remainingCredit} hr</h3>
            <div className="pt-4 pb-6 border-t-2 border-b-2">
                <h2 className="text-xl font-bold">Course Name</h2>
                <ol className="list-decimal ml-5 mt-5 text-gray-700">
                   {
                    courseIncart.map(course => <li key={course.id}>{course.course_name}</li>)
                   }

                </ol>
            </div>
            
            <p className="py-4 border-b-2 text-gray-600 font-semibold">Total Credit Hour : {totalCredit}</p>
           
        </div>
    );
};

Cart.propTypes = {
    courseIncart: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number
}
export default Cart;