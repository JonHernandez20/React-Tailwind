
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../Context"
import Layout from "../Components/Layout"
import OrderCards from "../Components/OrderCards"

function MyOrders() {

  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1>My Orders 🐬</h1>
      {
        order?.map((order, index) => {
          <Link key={index} to={`/myOrders/${order.id}`}>
            <OrderCards 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        })
      }
    </Layout>
  )
}

export default MyOrders