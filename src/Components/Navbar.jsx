
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ShoppingCartContext } from "../Context";
import { useContext } from "react";


function Navbar() {
    const { addProducts, setCategory } = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
        <ul className="flex items-center gap-4">
            <li className="font-semibold text-lg">
                <NavLink
                    to='/'
                    onClick={() => {
                        setCategory('')
                    }}>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/all'
                    onClick={() => {
                        setCategory('')
                    }}
                    className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes'
                onClick={() => {
                    setCategory('clothes')
                }}
                className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? " underline text-gray-300" : ""}>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics'
                onClick={() => {
                    setCategory('electronics')
                }}
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300	" : ""}>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furniture'
                onClick={() => {
                    setCategory('furniture')
                }}
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/toys'
                onClick={() => {
                    setCategory('toys')
                }}
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/others'
                onClick={() => {
                    setCategory('others')
                }}
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-4">
            <li className="text-black/50">
                jon@platzi.com
            </li>
            <li>
                <NavLink to='/myOrders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/myAccount'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/signIn'>
                    Sign In
                </NavLink>
            </li>
            <li className="flex items-center gap-1">
                <AiOutlineShoppingCart className="text-xl"/>
                {addProducts.length}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;