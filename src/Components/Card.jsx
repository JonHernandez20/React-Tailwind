
import { useContext } from 'react'
import { GrAdd } from 'react-icons/gr'
import { ShoppingCartContext } from '../Context'

const Card = (prod) => {
  const { count, setCount, openDetail, setProductShow, setAddProducts, addProducts } = useContext(ShoppingCartContext );

  const addProductsToCart = (prodData) => {
    console.log(addProducts);
    setAddProducts([...addProducts, prodData]);
  };

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-60 rounded-lg'
    onClick={() => setProductShow(prod.data)}>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ prod.data?.category?.name}</span>
            <img src={prod.data?.images}
            className='w-full h-full object-cover rounded-lg'
            alt='headphones'
            onClick={() => { openDetail(); }}
            />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
              <button onClick={() => {
                setCount(count+1)
                addProductsToCart(prod.data)
                }}>
                <GrAdd />
              </button>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{ prod.data?.title}</span>
            <span className='text-lg font-medium'>${ prod.data?.price }</span>
        </p>
    </div>
  )
}

export default Card;