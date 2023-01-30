import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}


export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false)

    const btnClassName = details ? "bg-gray-400" : "bg-whitesmoke-400"

    const btnClasses = ["py-1 px-3 border", btnClassName]

    return (
        <div
            className="border py-4 px-4 rounded flex flex-col items-center mb-5"
        >
            <img src={product.image} alt={product.title} className="w-1/6 mb-2" />
            <p className="mb-2">{product.title}</p>
            <p className="font-bold mb-2">Price: {product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? "Hide Details" : "Show Details"}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: "bold"}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}