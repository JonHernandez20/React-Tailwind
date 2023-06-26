
import { GrClose } from 'react-icons/gr'
import PropTypes from 'prop-types';

const OrderCard = (props) => {
    
    const { id, name, imageUrl, price, deleteProducts } = props;
    let renderIconDelete;
    if(deleteProducts) {
        renderIconDelete = <GrClose onClick={()=>{deleteProducts(id)}} className='cursor-pointer'/>
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img src={imageUrl} alt={name} className='w-full h-full rounded-lg object-cover'/>
                </figure>
                <p className='text-sm font-light'>{name}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderIconDelete}
            </div>
        </div>
  )
}

OrderCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.node,
    price: PropTypes.number,
    deleteProducts: PropTypes.func,
}

export default OrderCard