import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='w-full h-20 md:flex px-20 bg-gray-800 items-center justify-between text-white'>
                <h1 className='cursor-pointer text-center text-lg font-bold sm:w-96   '>Work digital</h1>
                <ul className='md:flex'>
                    <a className='pl-4' href="/">Home</a>
                    <a className='pl-4' href="/">about</a>
                    <a className='pl-4' href="/">services</a>
                    <a className='pl-4' href="/">contact</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;