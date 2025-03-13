import React from 'react'
import { MailIcon, PhoneCallIcon, HeadSetPhonesIcon, LogoIcon } from '../../constant/SvgFile';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Downarrow from '../../../images/downarrow.png';


function MainHeader() {
    return (
        <div className='py-[22px] flex items-center'>
            <div className='w-[1169px] flex items-center'>
                <LogoIcon />
                <div className='flex justify-between w-full'>
                    <nav className='flex items-center pl-[215px] gap-[70px] text-base'>
                        <Link to='/'>Home</Link>
                        <Link to='/features'>Features</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/about' className='flex items-center gap-[10px]'>About us <img src={Downarrow} alt='downarrow' /></Link>
                    </nav>
                    <button onClick={() => console.log("Login")} className='py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default MainHeader