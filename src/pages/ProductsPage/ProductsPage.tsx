import React, {useContext} from 'react'
import CreateProduct from '../../components/CreateProduct/CreateProduct';
import ErrorMessage from '../../components/ErrorMessageD/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { Product } from '../../components/Products/Product';
import { ModalContext } from '../../context/ModalText/ModalText';
import { useProducts } from '../../hooks/products';
import { IProduct } from '../../models';

const ProductsPage = () => {
  
    const {loading, error, products, addProduct} = useProducts()
  
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      closeModal()
      addProduct(product)
    }
  
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product product={product} key={product.id} />)}
  
        {modal && <Modal title='Create new Product' onClouse={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>}
  
        <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-1l px-4 py-2'
        onClick={openModal}
        >Add Product +</button>
  
      </div>
    )
  
};

export default ProductsPage;