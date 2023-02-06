import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../../models';
import ErrorMessage from '../ErrorMessageD/ErrorMessage';

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (title.trim().length === 0) {
            setError(`Please enter valid title.`)
            return
        }

        productData.title = title
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='center'>
                <input
                    type="text"
                    placeholder='Enter product title...'
                    className='border py-2 px-4 mb-4 w-full'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <p>{error && <ErrorMessage error={error} />}</p>
                <button type='submit' className='py-2 px-4 border bg-yellow-400'>Create</button>

            </form>
        </div>
    );
};

export default CreateProduct;