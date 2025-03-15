import React from 'react';
import WhiteLogo from '../../images/whiteLogo.png';
import { FacebookIcon, LinkinedIcon, InstagramIcon } from '../constant/SvgFile'

function Footer() {
    return (
        <div
            className="w-full bg-secondaryColor">
            <div className='w-[1169px] m-auto py-[104px] flex justify-between'>
                <div className=' text-white flex justify-center items-center '>
                    <div><img src={WhiteLogo} alt='Logo' /></div>
                    <div className='h-[120px] w-[1px] bg-white mx-[30px]'></div>
                    <div>
                        <ul className='flex justify-center gap-[30px] text-white'>
                            <li>About Us</li>
                            <li>Features</li>
                            <li>Contact Us</li>
                        </ul>
                        <div className='pt-[15px]'>
                            <span>&copy; <span className='pl-[5px]'>2024 Refvault. All Right Reserved.</span></span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <div className='flex gap-[10px] pb-[10px] justify-end'>
                            <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                                <FacebookIcon />
                            </div>
                            <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                                <InstagramIcon /></div>
                            <div className='w-9 h-9 border-[2px] rounded-[5px] border-white flex justify-center items-center'>
                                <LinkinedIcon /></div>
                        </div>
                        <div className='text-white text-sm font-poppins'>refvaultsupport@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer