import React from 'react'
import { MailIcon, PhoneCallIcon, HeadSetPhonesIcon, LogoIcon } from '../../constant/SvgFile';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Downarrow from '../../../images/downarrow.png';


function MainHeader() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div className='py-[22px] flex items-center bg-white'>
            <div className='lg:w-[1169px] md:w-[722px] flex items-center'>
                <LogoIcon />
                <div className='flex justify-between w-full'>
                    <nav className='flex items-center pl-[88px] gap-[40px] text-base'>
                        <Link to='/' className={`${isActive('/') ? 'border-b-2 border-primaryColor' : ''}`}>Home</Link>
                        <Link to='/features' className={`${isActive('/features') ? 'border-b-2 border-primaryColor' : ''}`}>Features</Link>
                        <Link to='/pricing' className={`${isActive('/pricing') ? 'border-b-2 border-primaryColor' : ''}`}>Pricing</Link>
                        <Link to='/howitworks' className={`${isActive('/pricing') ? 'border-b-2 border-primaryColor' : ''}`}>How It Works</Link>
                        <Link to='/about' className={`flex items-center gap-[10px] ${isActive('/about') ? 'border-b-2 border-primaryColor' : ''}`}>About us <img src={Downarrow} alt='downarrow' /></Link>
                    </nav>
                    <button onClick={() => console.log("Login")} className='py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default MainHeader