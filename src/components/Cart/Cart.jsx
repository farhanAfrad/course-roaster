import DisplayCart from "../Display Cart/DisplayCart";
import PropTypes from 'prop-types'

const Cart = ({cart}) => {
    
    return (
        <div>
            {
                cart.map(course => <DisplayCart key={course.id} course={course}></DisplayCart>)
            }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
}
export default Cart;