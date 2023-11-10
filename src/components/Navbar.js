'use client';
import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector(state => state.cart);
    return (
        <div className='bg-slate-50 w-full py-5 px-3 flex items-center justify-between'>
            <span>Redux con Nextjs test </span>
            <div>
                <Link href={'/'} className='font-bolder bg-purple-600 py-2 px-4 rounded-md text-slate-900'>Home</Link>
                <Link href={'/cart'} className='font-bolder bg-purple-600 py-2 px-4 mx-1 rounded-md text-slate-900'>Cart</Link>
                <span className='font-bolder text-emerald-600'>items:{items.length}</span>
            </div>
        </div>
    )
}

export default Navbar