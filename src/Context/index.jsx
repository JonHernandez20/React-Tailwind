
import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Contador de productos
    const [count, setCount] = useState(0);

    // Buscador de productos
    const [search, setSearch] = useState('');

    // Renderizado de productos
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(res => res.json())
          .then(data => setItems(data))
    }, [])

    // Filtrado por busqueda
    const [filterItems, setFilterItems] = useState(null);

    const filterSearch = (i, searchByTitle) => {
        return i?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    // Filtrado por categoria
    const [category, setCategory] = useState('');
    const filterSearchCategory = (i, searchByCategory) => {
        return i?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filterSearch(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filterSearchCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterSearchCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (search && category) setFilterItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, category))
        if (search && !category) setFilterItems(filterBy('BY_TITLE', items, search, category))
        if (!search && category) setFilterItems(filterBy('BY_CATEGORY', items, search, category))
        if (!search && !category) setFilterItems(filterBy(null, items, search, category))
      }, [items, search, category])

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
            search,
            setSearch,
            filterItems,
            setFilterItems,
            category,
            setCategory,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};