
import { useState } from "react"
import { ShoppingCartContext } from "../Context"
import OrderCard from '../Components/OrderCard'
import Layout from "../Components/Layout"

function MyOrder() {

  const { order } = useState(ShoppingCartContext)
  console.log(order);

  return (
    <Layout>
      My Order 🐆
      <div className='grid px-2 gap-2 overflow-y-scroll'>
        {
            order?.products?.slice(-1)[0](item => (
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