'use client';

import React from 'react'
import { remove } from '@/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart); //traigo los products de cart si hay

    const handleRemove = id => {
       dispatch(remove(id));
    }

    return (
        <div>
            <h3 className='font-bolder text-slate-800 text-center'>Cart Page</h3>
            <div className='flex flex-col justify-center w-full items-center'>
                {
                    cartItems.map(item => (
                        <div className='flex w-1/2 justify-around items-center' key={item.id}>
                            <img className='w-12' src={item.image} />
                            <h5 className='text-xs w-1/4'>{item.title}</h5>
                            <h5 className='font-bolder text-md'>$ {item.price}</h5>
                            <button onClick={() => handleRemove(item.id)} className='mb-2 py-2 px-4 rounded-md bg-emerald-500'>-</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CartPage