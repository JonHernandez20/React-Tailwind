
import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Contador de productos
    const [count, setCount] = useState(0);

    // Renderizado de productos
    const [items, setItems] = useState(null);

    // Estado que identifica al aside si esta abierto o cerrado.
    const [openFunc, setOpenFunc] = useState(false);
    const openDetail = () => setOpenFunc(true);
    const closeDetail = () => setOpenFunc(false);

    // Estado que identifica el menu si esta abierto o cerrado.
    const [menuFunc, setMenuFunc] = useState(false);
    const openMenu = () => setMenuFunc(true);
    const closeMenu = () => setMenuFunc(false);

    // Mostrar producto en Aside
    const [productShow, setProductShow] = useState({});

    // Agrega productos al carrito
    const [addProducts, setAddProducts] = useState([]);

    // Shopping order
    const [order, setOrder] = useState([])

    // Quita el error de 'children'.
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(res => res.json())
          .then(data => setItems(data))
    }, [])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            items,
            setItems,
            openDetail,
            closeDetail,
            openFunc,
            productShow,
            setProductShow,
            addProducts,
            setAddProducts,
            openMenu,
            closeMenu,
            menuFunc,
            setMenuFunc,
            order,
            setOrder,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};