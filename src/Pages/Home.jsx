
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';
import Card from '../Components/Card';
import Layout from '../Components/Layout';
import Detail from '../Components/Detail';

function Home() {
  const { setSearch, filterItems } = useContext( ShoppingCartContext );
  const viewProducts = () => {
    if(filterItems?.length > 0) {
      return(
        filterItems?.map(item => (<Card 
        key={ item.id }
        data={ item } /> ))
      );
    } else {
      return (
        <div>I&m sorry, don&t a product...</div>
      );
    }
  }

  return (
    <Layout>
      <h1 className='font-bold mb-5'>Exclusive products</h1>
      <input type="text"
      placeholder='Search a product' 
      className='border border-black p-3 rounded-lg w-80 mb-4 focus:outline-none'
      onChange={(event) => setSearch(event.target.value)}/>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        { viewProducts() }
      </div>
      <Detail />
    </Layout>
  )
}

export default Home