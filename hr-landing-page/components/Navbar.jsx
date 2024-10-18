import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex bg-customBlue justify-between text-white p-4'>
            <a className='text-3xl' href="#">HR</a>

            <ul className='flex space-x-2 md:space-x-7'>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar