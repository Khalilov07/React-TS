import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <nav className='h-[50px] flex justify-between px-5 items-center bg-black text-white'>
            <Link className='font-bold' to='/'>React 2023</Link>

            <div>
                <Link to='/' className='mr-2'>Product</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
        
        </>
    );
};

export default Navigation;