
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
    { path: '/clothes', element: <Home /> },
    { path: '/all', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furniture', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/myAccount', element: <MyAccount /> },
    { path: '/myOrder', element: <MyOrder /> },
    { path: '/myOrders', element: <MyOrders /> },
    { path: '/myOrders/last', element: <MyOrder /> },
    { path: '/myOrders/:id', element: <MyOrder /> },
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
