'use client';
import { add } from '@/redux/cartSlice';
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    setProducts(data);
  }

  const handleAdd = product => {
    dispatch(add(product))
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (

    <div className='flex flex-wrap justify-around my-10 mx-4 '>
      {
        products.map((product) => (
          <div key={product.id} className='bg-orange-50 shadow-black shadow-sm my-8 mx-1 flex flex-col justify-center items-center rounded-md hover:border-2 border-slate-700 w-1/4'>
            <img className='w-full h-56 object-cover rounded-t-md' src={product.image} alt='img' />
            <h4 className='text-slate-700 text-center m-1'>{product.title}</h4>
            <h5 className='my-2 text-center text-black font-bold'>$ {product.price}</h5>
            <button onClick={() => handleAdd(product)} className='mb-2 py-2 px-4 rounded-md bg-emerald-500'>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage