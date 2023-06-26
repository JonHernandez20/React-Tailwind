
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { ShoppingCartContext } from "../Context"
import OrderCard from '../Components/OrderCard'
import Layout from "../Components/Layout"

function MyOrder() {

  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex w-80 items-center justify-center mb-4'>
        <Link to={'/myOrders'}>
          <BsChevronDoubleLeft />
        </Link>
        <h1>My Order 🐆</h1>
      </div>
      
      <div className='grid px-2 gap-2 overflow-y-scroll'>
        {
            order?.slice(-1)[0].products.map(item => (
                <OrderCard 
                    key={item.id}
                    id={item.id}
                    name={item.title}
                    price={item.price}                    
                    imageUrl={item.images}
                />
            ))
        }
        </div>
    </Layout>
  )
}

export default MyOrder