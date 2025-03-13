import React from 'react';
import WhiteLogo from '../../images/whiteLogo.png'

function Footer() {
    return (
        <div
            className="w-full bg-secondaryColor">
            <div className='w-[1169px] m-auto pt-[104px] flex justify-between'>
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
                <div className='flex gap-4'>
                    <button className='py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium'>Get Started for Free</button>
                    <button className='py-2 px-5 rounded-md text-sm bg-white text-secondaryColor font-medium'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Footer