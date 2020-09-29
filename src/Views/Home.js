import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {

    const url = `https://5f7250986833480016a9b8ef.mockapi.io/estore/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null


    if(products.error) {
        content = <p>There was an error, try again later or check your parameters</p>
    }

    if(products.loading) {
        content = <Loader />
    }

    if(products.data) {
        content =             
        products.data.map((product, key) => 
        <div key={product.id}>
            <ProductCard 
                product={product}
            />
        </div>
        )
    }

    return(
        <div>
            <h1 class="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home