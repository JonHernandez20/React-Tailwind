
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../Context';
import Home from './Home';
import MyAccount from './MyAccount';
import MyOrder from './MyOrder';
import MyOrders from './MyOrders';
import NotFound from './NotFound';
import SignIn from './SignIn';
import Navbar from '../Components/Navbar';
import '../Styles/App.css'
import Checkout from '../Components/Checkout';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myAccount', element: <MyAccount /> },
    { path: '/myOrder', element: <MyOrder /> },
    { path: '/myOrders', element: <MyOrders /> },
    { path: '/signIn', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <Checkout />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
