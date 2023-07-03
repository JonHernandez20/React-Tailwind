
import { AiOutlineArrowRight } from 'react-icons/ai'
import PropTypes from 'prop-types';
import '../Styles/OrderCards.css'

const OrderCards = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className='grid container items-center mb-3 border border-black rounded-lg w-60 p-2'>
            <div className='grid grid-cols-2'>
                <p><span className='font-thin'>01.12.23</span></p>
                <p><span className='font-bold'>${totalPrice}</span></p>
                <p><span>{totalProducts} Articulos</span></p>
            </div>
            <div>  
                <AiOutlineArrowRight />
            </div>
        </div>
  )
}

OrderCards.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number
}

export default OrderCards