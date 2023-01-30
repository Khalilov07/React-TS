import React, {useState, useEffect} from 'react'
import axios, { Axios, AxiosError } from "axios"
import { IProduct } from '../models'

export const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const URL = "https://fakestoreapi.com/products/?limit=5"

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>(URL)
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, loading, error}

}