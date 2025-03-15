import React from 'react';
import HomeBgBanner from '../../images/homeBannerBg.png'
import { FacebookIcon, InstagramIcon, LinkinedIcon } from '../constant/SvgFile';

function Banner() {
    return (
        <div
            className="w-full h-[1080px]"
            style={{
                backgroundImage: `url(${HomeBgBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='w-[1169px] m-auto pt-[223px] flex justify-between relative'>
                <div>
                    <div className=' text-white w-[540px] pb-[43px]'>
                        <h1 className='text-[50px] font-bold font-poppins leading-[1.15] pb-[23px]'>Streamlined, Secure, And Smart Reference Management</h1>
                        <div className='text-5 font-light font-notoSans opacity-[1] w-[380px]'>Request, Verify, Analyze and Archive Professional References – all in one platform</div>
                    </div>
                    <div className='flex gap-4'>
                        <button className='py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium'>Get Started for Free</button>
                        <button className='py-2 px-5 rounded-md text-sm bg-white text-secondaryColor font-medium'>Learn More</button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 relative -right-[267px] top-[62px]">
                    <div className='w-[2px] h-[130px] bg-white'></div>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkinedIcon />
                    <div className='w-[2px] h-[130px] bg-white'></div>
                </div>
                <div className='w-[30px] h-[50px] rounded-[22px] border-[2px] border-white absolute -bottom-[363px] left-[50%] flex flex-col items-center justify-center space-y-[4px] cursor-pointer' onClick={() => console.log("Clicked me!")}>
                    <div className='w-[2px] h-[17px] bg-white rounded-[3px]'></div>
                    <div className='w-[2px] h-[2px] bg-white'></div>
                    <div className='w-[2px] h-[2px] bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default Banner;