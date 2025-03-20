import React from 'react';
import WhiteLogo from '../../images/whiteLogo.png';
import { FacebookIcon, LinkinedIcon, InstagramIcon } from '../constant/SvgFile'

function Footer() {
    return (
        <div className="w-full bg-secondaryColor">
            <div className='w-full max-w-[1169px] px-4 m-auto py-[50px] md:py-[104px] flex flex-col md:flex-row justify-between items-center'>
                <div className='text-white flex flex-col md:flex-row justify-center items-center text-center md:text-left'>
                    <div><img src={WhiteLogo} alt='Logo' className='w-[120px] md:w-auto' /></div>
                    <div className='hidden md:block h-[120px] w-[1px] bg-white mx-[30px]'></div>
                    <div className='mt-5 md:mt-0'>
                        <ul className='flex flex-col md:flex-row justify-center gap-[15px] md:gap-[30px] text-white'>
                            <li>About Us</li>
                            <li>Features</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className='pt-[15px] text-sm'>
                            <span>&copy; <span className='pl-[5px]'>2024 Refvault. All Rights Reserved.</span></span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-end mt-5 md:mt-0'>
                    <div className='flex gap-[10px] pb-[10px]'>
                        <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                            <FacebookIcon />
                        </div>
                        <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                            <InstagramIcon />
                        </div>
                        <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                            <LinkinedIcon />
                        </div>
                    </div>
                    <div className='text-white text-sm font-poppins text-center md:text-right'>refvaultsupport@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer