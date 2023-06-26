
import PropTypes from 'prop-types';

const OrderCards = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg'>
            <p className='flex p-2'>
                <span>01.12.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
  )
}

OrderCards.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number
}

export default OrderCards