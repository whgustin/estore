import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product() {

    const { id } = useParams()
    const url = `https://5f7250986833480016a9b8ef.mockapi.io/estore/v1/products/${id}`

    let product = useAxiosGet(url)

    let content = null

    if(product.error) {
        content = <p>There was an error, try again later or check your parameters</p>
    }

    if(product.loading) {
        content = <Loader />
    }

    if(product.data) {
        content =             
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img 
                        src={product.data.image}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product