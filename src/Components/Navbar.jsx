
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-4">
            <li className="font-semibold text-lg">
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/all'
                    className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes'
                className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? " underline text-gray-300" : ""}>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics'
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300	" : ""}>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/furnitures'
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/toys'
                className={({ isActive }) =>
                        isActive ? "underline text-gray-300" : ""}>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/others'
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
            <li>
                🛒 0
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;