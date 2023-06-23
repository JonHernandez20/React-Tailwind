
import { useContext } from 'react'
import { GrAdd } from 'react-icons/gr'
import { MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { ShoppingCartContext } from '../Context'

const Card = (prod) => {
  const { openDetail, setProductShow, setAddProducts, addProducts, closeDetail, menuFunc, openMenu, openFunc, closeMenu } = useContext(ShoppingCartContext );

  const addProductsToCart = (prodData, event) => {
    setAddProducts([...addProducts, prodData]);
    openFunc ? closeDetail() : openMenu();
    openMenu();
    event.stopPropagation();
  };

  const productToShow = () => {
    setProductShow(prod.data);
    menuFunc ? closeMenu() : openDetail();
    openDetail();
  }

  const render = (id) => {
    const isInCar = addProducts.filter(product=> product.id === id).length > 0;
    if (isInCar) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1'>
          <button className='text-white w-full h-full cursor-not-allowed	'>
            <MdOutlineShoppingCartCheckout />
          </button>
        </div>
      );

    } else {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <button onClick={(event) => addProductsToCart(prod.data, event) }>
            <GrAdd />
          </button>
        </div>
      );
    }
  }

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ prod.data?.category?.name}</span>
            <img src={prod.data?.images}
            className='w-full h-full object-cover rounded-lg'
            alt='headphones'
            onClick={() => { productToShow() }}
            />
            { render(prod.data.id) }
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{ prod.data?.title}</span>
            <span className='text-lg font-medium'>${ prod.data?.price }</span>
        </p>
    </div>
  )
}

export default Card;