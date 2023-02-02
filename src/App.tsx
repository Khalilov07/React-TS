import ErrorMessage from './components/ErrorMessageD/ErrorMessage';
import Loader from './components/Loader/Loader';
import { Product } from './components/Products/Product';
import { useProducts } from './hooks/products';

const App = () => {

  const {loading, error, products} = useProducts()  

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )

}

export default App;
