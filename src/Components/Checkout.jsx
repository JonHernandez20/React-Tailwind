
import { useContext } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { ShoppingCartContext } from "../Context"
import OrderCard from "./OrderCard";


function Checkout() {
  const { menuFunc, closeMenu, addProducts } = useContext(ShoppingCartContext);
  
  return (
    <aside 
    className={` ${menuFunc ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col gap-2 fixed top-[68px] right-0 border border-black rounded-lg bg-white p-4`}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>My Orders</h2>
            <div className='text-2xl cursor-pointer' onClick={() => closeMenu()}>
              <AiFillCloseCircle />
            </div>
        </div>
        <div className='grid px-2 gap-2 overflow-y-scroll'>
            {
                addProducts.map(item => (
                    <OrderCard 
                        key={item.id}
                        name={item.title}
                        price={item.price}                    
                        imageUrl={item.images}
                    />
                ))
            }
        </div>
    </aside>
  )
}

export default Checkout