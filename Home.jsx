import React from 'react'
import { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home(props) {

    function settigCartDetails(productDetails){
        let data = [...props.cartDetails,productDetails]
        props.setCartDetails(data)
    }

    // console.log(props.cartDetails)

    return (
        <div className='container'>
            <div className="row row-col-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4">
                {
                    props.data.map((e,index) => 
                        <div className="col mb-4"  key={index}>
                            <div className="card h-100">
                                <img className='mx-auto mt-3' width='150px' height="150px" src={e.image} alt="" />
                                <div className="card-body">
                                    <h5>{e.title}</h5>
                                    <p><strong>Price : </strong>${e.price}</p>
                                    {/* <p><FaRegStar />{e.rating.rate}</p> */}
                                    <button className="btn btn-primary" onClick={()=>{settigCartDetails(e)}}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Home
