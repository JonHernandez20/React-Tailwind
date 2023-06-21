
import { useContext } from 'react';
import Card from '../Components/Card';
import Layout from '../Components/Layout';
import { ShoppingCartContext } from '../Context';

function Home() {
  const { items } = useContext( ShoppingCartContext );

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
    </Layout>
  )
}

export default Home