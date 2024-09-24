import React from 'react'
// import { useLocation } from 'react-router-dom'
import {useState} from 'react'

function Cart(props) {

    let totalMrp = 0
    
    for(let i=0;i<props.cartDetails.length;i++){
        totalMrp += props.cartDetails[i].price
    }

    let totalAmount = totalMrp + 5 + 2

    function remove(index){
        let cartDetails = [...props.cartDetails]
        cartDetails.splice(index,1)
        props.setCartDetails(cartDetails)
    }

    return (
        <div>

            <h1 className='text-center bg-info shadow p-4 my-4'>Cart</h1>

            {
                props.cartDetails.length === 0 ? 
                <p className='lead text-center text-success'>*Select above products to add into cart*</p> :
                <div className="container">
                <div className='row row-col-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4 mt-4'>
                    {
                        props.cartDetails.map((e,i)=>
                            <div className="col mb-4" key={i}>
                                <div className="card h-100">
                                    <img className='mx-auto mt-3' src={e.image} width="150px" height="150px" alt="" />
                                    <div className="card-body">
                                        <h5>{e.title}</h5>
                                        <p><strong>Price : </strong>${e.price}</p>
                                        <button className="btn btn-danger" onClick={()=>{remove(i)}}>Remove</button>
                                    </div> 
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="card w-25 mx-auto mb-5">
                    <div className="card-body">
                        <h4 className='mb-3'>Price Details</h4>
                        <p>Total MRP : {totalMrp}</p>
                        <p>Coupon Discount : $5</p>
                        <p>shopping Charges : $2</p>
                        <hr />
                        <p>Total Amount : ${totalAmount}</p>
                        <button className='btn btn-primary'>Place Order</button>
                    </div>
                </div>

            </div>
            }

        </div>
    )
}

export default Cart
