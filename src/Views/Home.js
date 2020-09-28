import React from 'react'
import HelloWorld from '../Components/HelloWorld';

function Home() {
    return(
        <div>
            <h1 class="font-bold text-2xl">This is the Home Page</h1>

            <HelloWorld name="Wesley" />
        </div>
    )
}

export default Home