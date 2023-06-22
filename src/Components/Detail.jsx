
import { useContext } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { ShoppingCartContext } from "../Context"


function Detail() {
  const { openFunc, closeDetail, productShow, } = useContext(ShoppingCartContext);
  console.log(productShow);
  
  return (
    <aside 
    className={` ${openFunc ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col gap-2 fixed top-[68px] right-0 border border-black rounded-lg bg-white p-4`}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div className='text-2xl cursor-pointer' onClick={() => closeDetail()}>
              <AiFillCloseCircle />
            </div>
        </div>
        <figure>
          <img 
          className='w-full h-full rounded-lg'
          src={productShow?.images} alt={productShow.title}/>
        </figure>
        <p
        className='flex flex-col p-3'>
          <span className='font-bold text-2xl'>$ {productShow.price}</span>
          <span className='font-mono text-md'>{productShow.title}</span>
          <span className='text-slate-700	font-light text-sm'>{productShow.description}</span>
        </p>
    </aside>
  )
}

export default Detail