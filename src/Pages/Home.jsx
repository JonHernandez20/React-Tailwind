
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';
import Card from '../Components/Card';
import Layout from '../Components/Layout';
import Detail from '../Components/Detail';

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
      <Detail />
    </Layout>
  )
}

export default Home