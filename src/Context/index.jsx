
import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(null);

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
            setItems
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};