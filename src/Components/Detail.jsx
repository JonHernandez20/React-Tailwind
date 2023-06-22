
import { useContext } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { ShoppingCartContext } from "../Context"


function Detail() {
  const { openFunc, closeDetail } = useContext(ShoppingCartContext);

  return (
    <aside 
    className={` ${openFunc ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white p-4`}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div className='text-2xl cursor-pointer' onClick={() => closeDetail()}>
              <AiFillCloseCircle />
            </div>
        </div>
    </aside>
  )
}

export default Detail