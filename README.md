# React-Tailwind


> 🚩 Introduccion 

## 📚 Construye una tienda online con React - Clase 1

*🖌 ANOTACIONES:*

- **Requisitos:**
    1. HTML y CSS
    2. JavaScript
    3. Git y GitHub 
    4. Manipulacion del DOM
    1. Fundamentos de React

> 🚩 Enrutamiento y estructura base

## 📚 Instalacion de React con Vite y TailwindCSS - Clase 2

``
CODIGO APRENDIDO 🧠
``

```bash
# BASH // Terminal

# VITE

# Crear proyecto con Vite (Instalar en VSC)
$ npm create vite@latest

# TAILWINDCSS    

# Instala Tailwind y despues Genera archivos y configuraciones
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

## 📚 Analisis de rutas y componentes en React - Clase 3

#### *ANOTACIONES ✍*

- Reprograma:
    - Rutas: Estas van en APP, son todas las localizaciones.
    - Paginas: Es lo que se va a mostrar dependiendo su ruta.
    - Componentes: Son las partes que forman y hacen a las paginas.

![](https://i.imgur.com/UntYAFV.png)

## 📚 Enrutamiento con React Router DOM- Clase 4

#### *ANOTACIONES ✍*

- Al importar, lo recomendable es que vaya primero, React, JSX y estilos.
- *path: '/*'*: Ruta 404.

``
CODIGO APRENDIDO 🧠
``

``` bash
# /* bash */

# INSTALAR REACT ROUTER DOM 
$ npm install react-router-dom
```

```jsx
// /* JSX */
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import MyAccount from './MyAccount';
import MyOrder from './MyOrder';
import MyOrders from './MyOrders';
import NotFound from './NotFound';
import SignIn from './SignIn';
import '../App.css'

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
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

```

## 📚 Componente Navbar - Clase 5

#### *ANOTACIONES ✍*

- A `<NavLink>` es un tipo especial de `<Link>` que sabe si está o no "activo" o "pendiente". Esto es útil al crear un menú de navegación, como una ruta de navegación o un conjunto de pestañas donde le gustaría mostrar cuál de ellas está seleccionada actualmente. También proporciona un contexto útil para la tecnología de asistencia, como los lectores de pantalla.

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */

<li>
    <NavLink 
    to='/electronics'
    className={({ isActive }) =>
            isActive ? "underline text-gray-300	" 
            : ""}>
        Electronics
    </NavLink>
</li>
```

## 📚 Componente de Layout - Clase 6

#### *ANOTACIONES ✍*

- ¿Que es un layout?, Es un esquema que resume y señala la distribución y forma de los elementos dentro de un diseño.
- Hubo error en `<Layout>`, ya que debio hacer una validacion de accesorios. Para corregir este error, se debe instalar `prop-types` y indicar la prop con node.

![](https://i.imgur.com/qIofIJr.png)

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-20">
        {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

```bash
# /* bash */

#INSTALAR PROP-TYPES
$ npm i prop-types --save
```

## 📚 Componente de Card - Clase 7

#### *ANOTACIONES ✍*

![Componente](https://i.imgur.com/lkHgDYl.jpg)

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */


const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
            <img src='https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full object-cover rounded-lg' alt='headphones' />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>Headphones</span>
            <span className='text-lg font-medium'>$300</span>
        </p>
    </div>
  )
}

export default Card;
```

## 📚 Consumiendo la FakeStore API para pintar cards - Clase 8

#### *ANOTACIONES ✍*

- Antes de consumir una API, lo recomendable es leer la documentacion. [API que consumimos](https://fakeapi.platzi.com/)
- `STATE`: Variable donde se guardara el consumo, o en este caso, donde se guardara los productos e informacion.
- Cuando hacemos consumo siempre se debe usar `useEffect`.

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */


function Home() {
  // CONSUMO DE API
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  //
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (<Card 
            key={ item.id }
            data={ item }
            />))
        }
      </div>
      <Card/>
    </Layout>
  )
}
```

> 🚩 Manejo de estado de global con Context

## 📚 Contexto global de la aplicacion - Clase 9

#### *ANOTACIONES ✍*

- Apuntes

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ ./copntext/index.jsx

import { createContext } from 'react'

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    return (
        <ShoppingCartContext.Provider>
            { children }
        </ShoppingCartContext.Provider>
    );
}
```

``` jsx
// /* jsx */ ./pages/app.jsx

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
```

## 📚 Contador de productos en el carrito - Clase 10

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ card.jsx

const Card = (data) => {
  const { count, setCount} = useContext(ShoppingCartContext );

  return (
    <button onClick={() => setCount(count+1)}>
      +
    </button>
  );
}
```

## 📚 Abriendo el detalle de cada producto - Clase 11

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */


function Detail() {
  return (
    <aside className='product-detail w-[360px] h-[calc(100vh-68px)] flex flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white p-4'>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>X</div>
        </div>
    </aside>
  )
}

export default Detail
``` 

## 📚 RETO: heroicons con TailwindCSS - Clase 12

``
CODIGO APRENDIDO 🧠
``

```bash
# /* bash */

#INSTALAR ICONOS
$npm install react-icons --save
```

```jsx
// /* jsx */
import { AiFillCloseCircle } from "react-icons/ai"
const Aside = () => {
	return (
		<div>
      <AiFillCloseCircle />
		</div>
	)
};
```

## 📚 Maquetando el ProductDetail - Clase 13

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */

function Detail() {
  const { openFunc, closeDetail } = useContext(ShoppingCartContext);

  return (
    <aside 
    className={` ${openFunc ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-68px)] flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white p-4`}>
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div className='text-2xl cursor-pointer' onClick={() => closeDetail()}>
              <AiFillCloseCircle />
            </div>
        </div>
    </aside>
  )
}
```

## 📚 Mostrando productos en ProductDetail - Clase 14

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ detail.jsx
return (
  <aside
  clasName=`${${openFunc ? 'flex' : 'hidden'}}`
  >
  </aside>
);
```
``` jsx
// /* jsx */ card.jsx

return (
  const showProduct = (productItem) => {
    openDetail();
    setProductShow(productItem);
  }

  <div onClick={() => showProduct(prod.data)}>
  </div>
);
```
``` jsx
// /* jsx */ ./context/index

const [openFunc, setOpenFunc] = useState(false);
const openDetail = () => setOpenFunc(true);
const closeDetail = () => setOpenFunc(false);
```

> 🚩 Carrito de compras

## 📚 Agregando productos al carrito - Clase 15

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ card
const addProductsToCart = (prodData) => {
    console.log(addProducts);
    setAddProducts([...addProducts, prodData]);
  };
```

## 📚 SideMenu del carrito de compras - Clase 16

#### *ANOTACIONES ✍*

- Apuntes

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ card

const addProductsToCart = (prodData, event) => {
  setAddProducts([...addProducts, prodData]);
  openFunc ? closeDetail() : openMenu();
  openMenu();
  event.stopPropagation();
};

const productToShow = () => {
  setProductShow(prod.data);
  menuFunc ? closeMenu() : openDetail();
  openDetail();
}
```

```jsx
// /* jsx */ checkout
const [menuFunc, setMenuFunc] = useState(false);
const openMenu = () => setMenuFunc(true);
const closeMenu = () => setMenuFunc(false);
```

## 📚 Componente OrderCard - Clase 17 

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ ordercard
import { GrClose } from 'react-icons/gr'
function OrderCard(props) {    
  const { name, imageUrl, price } = props;
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img src={imageUrl} alt={name} className='w-full h-full rounded-lg object-cover'/>
            </figure>
            <p className='text-sm font-light'>{name}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            <GrClose className='cursor-pointer'/>
        </div>
    </div>
  )
}
export default OrderCard
```

```jsx
// /* jsx */ checkout
<div className='grid px-2 gap-2'>
    {
        addProducts.map(item => (
            <OrderCard 
                key={item.id}
                name={item.title}
                price={item.price}                    
                imageUrl={item.images}
            />
        ))
    }
</div>
```

## 📚 Evitando productos duplicados en el carrito - Clase 18

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ card
const isInCar = addProducts.filter(product=> product.id === id).length > 0;
  if (isInCar) {
    return (
      <div className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1'>
        <button className='text-white w-full h-full cursor-not-allowed	'>
          <MdOutlineShoppingCartCheckout />
        </button>
      </div>
    );

  } else {
    return (
      <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
        <button onClick={(event) => addProductsToCart(prod.data, event) }>
          <GrAdd />
        </button>
      </div>
    );
  }
```

## 📚 Eliminar productos del carrito - Clase 19

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ ordercard
const deleteProduct = (id) => {
  const filterProducts = addProducts.filter(product => product.id != id);
  setAddProducts(filterProducts);
}
```

## 📚 Suma total de productos de carrito - Clase 20

``
CODIGO APRENDIDO 🧠
``

``` js
// /* js */ ./hooks/totalprice
export const TotalPrice = (prod) => {
  let sum = 0;
  prod.forEach(element => {
      sum += element.price
  });
  return sum;
};
```

> 🚩 Checkout y ordenes de compra

## 📚 Flujo para crear una nueva orden - Clase 21

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ checkout
const handleCheckout = () => {
  // crea una order (lista de productos a ordenar)
  const orderToAdd = {
    date: '01.02.23', // Dia de la orden
    products: addProducts, // Productos que ordenare
    totalProducts: addProducts.length, // Total de productos que ordenare
    priceTotal: TotalPrice(addProducts) // Precoi totral
  }

  setOrder([...order, orderToAdd]); // estado
  setAddProducts([]);  // estado
};
```

## 📚 Checkout de productos en el carrito - Clase 22

#### *ANOTACIONES ✍*

- *PropTypes:* PropTypes proporciona una forma de validar que las propiedades (props) que se pasan a los componentes de React tengan el tipo de datos esperado. De esta manera, si se pasa una propiedad name que no es una cadena de texto, se mostrará un mensaje de advertencia en la consola del navegador. [NPM PropTypes](https://www.npmjs.com/package/prop-types)

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ checkout
const handleCheckout = () => {
  const orderToAdd = {
    date: '01.02.23',
    products: addProducts,
    totalProducts: addProducts.length,
    priceTotal: TotalPrice(addProducts)
  }
  setOrder([orderToAdd]);
  setAddProducts([]);
  console.log(order)
};
```

```jsx
// /* jsx */ myorder
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
```

## 📚 Pagina de MyOrders: Lista de ordenes - Clase 23

#### *ANOTACIONES ✍*

- Tenia un error al momento de querer ver los productos en `<MyOrder/>`, estaba usando `useState()` en lugar de `useContext()`.

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ myorder
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
```

## 📚 Pagina de MyOrder: orden individual - Clase 24

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ myorders
{
  order?.map((order, index) => (
    <Link key={index} to={`/myOrders/${index}`}>
      <OrderCards 
        totalPrice={order.totalPrice}
        totalProducts={order.priceTotal}
      />
    </Link>
  ))
}
```

```jsx
// /* jsx */ app
{ path: '/myOrders/:id', element: <MyOrder /> },
```
```jsx
// /* jsx */ myorder
/*
  Funcion para saber indice en el path
*/
const pathOrder = window.location.pathname;
let indexPath = pathOrder.substring(pathOrder.lastIndexOf('/') + 1);
if (indexPath === 'last') indexPath = order?.length - 1;
```
```jsx
// /* jsx */ myorders
/*
  Muestra products dependiendo del indice
*/
{
    order?.[indexPath]?.products.map(item => (
        <OrderCard 
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}                    
            imageUrl={item.images}
        />
    ))
}
```

## 📚 Reto: Ordenes de compra con TailwindCSS - Clase 25

![MyOrders](https://i.imgur.com/4eE1qHZ.jpg)

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ ordercards
return (
        <div className='grid container items-center mb-3 border border-black rounded-lg w-60 p-2'>
            <div className='grid grid-cols-2'>
                <p><span className='font-thin'>01.12.23</span></p>
                <p><span className='font-bold'>${totalPrice}</span></p>
                <p><span>{totalProducts} Articulos</span></p>
            </div>
            <div>  
                <AiOutlineArrowRight />
            </div>
        </div>
  )
```

> 🚩 Filtrando productos desde el frontend

## 📚 Buscador de productos - Clase 26

#### *ANOTACIONES ✍*

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ home
return (
  <input 
      onChange={(event) => setSearch(event.target.value)}/>
);
```

```jsx
// /* jsx */ context
const [search, setSearch] = useState('');
```

## 📚 Filtrando titulos con JavaScript - Clase 27

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */ context
const filterSearch = (i, searchByTitle) => {
    return i?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
}

useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setFilterItems(filterSearch(data, search)))
}, [items, search])
```

```jsx
// /* jsx */ home
const viewProducts = () => {
  if(search == '') {
    return (
      items?.map(item => (<Card 
      key={ item.id }
      data={ item } /> ))
    );
  } else {
    return (
      filterItems?.map(item => (<Card 
        key={ item.id }
        data={ item } /> ))
    );
  }
}
```

## 📚 Filtrando categorias con JavaScript - Clase 28

``
CODIGO APRENDIDO 🧠
``

``` jsx 
// /* jsx  */ context
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
```

## 📚 Corrigiendo bugs de la aplicacion - Clase 29

``
CODIGO APRENDIDO 🧠
``

``` jsx
// /* jsx */checkout
const handleCheckout = () => {
  const orderToAdd = {
    date: '01.02.23',
    products: addProducts,
    totalProducts: addProducts.length,
    priceTotal: TotalPrice(addProducts)
  }
  setOrder([...order, orderToAdd]);
  setAddProducts([]);
  closeMenu();
  setSearch(''); // Elimina busqueda para mejorar filtracion
};
```

> 🚩 Proximos pasos

## 📚 Deploy de React en Netflify - Clase 30

[Documentacion](https://es.vitejs.dev/guide/static-deploy.html#netlify)

## 📚 ¿Preparado para un Laboratorio de React? - Clase 31

#### *ANOTACIONES ✍*

- ¿Cual fue tu parte favorita del curso? Cuando conclui el proyecto y pude desplegarlo.