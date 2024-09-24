import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className='nav p-3 shadow d-flex align-items-center mb-5'>
            <img width="50px" className='d-flex justify-content-start' src="https://img.freepik.com/premium-vector/animal-logo-dove-vector_1271332-4059.jpg" alt="" />
            <h2 className=' mx-auto'>Ecommerce Website</h2>
        </div>
    )

}

export default Header
