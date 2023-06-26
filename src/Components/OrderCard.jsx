
import { GrClose } from 'react-icons/gr'

function OrderCard(props) {
    
    const { id, name, imageUrl, price, deleteProducts } = props;

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
                <GrClose onClick={()=>{deleteProducts(id)}} className='cursor-pointer'/>
            </div>
        </div>
  )
}

export default OrderCard