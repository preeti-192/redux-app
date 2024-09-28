import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div className='bg-orange-100 py-6 mb-5'>
            <nav className='container mx-auto'>
                <div className='flex justify-between'>
                    <p className='text-2xl text-black font-bold'>State Bank</p>
                    <button>Your Balance: {amount}</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar