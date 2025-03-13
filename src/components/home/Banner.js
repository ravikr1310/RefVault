import React from 'react';
import HomeBgBanner from '../../images/homeBannerBg.png'

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
            <div className='w-[1169px] m-auto pt-[223px]'>
                <div className=' text-white w-[540px] pb-[43px]'>
                    <h1 className='text-[50px] font-bold font-poppins leading-[1.15] pb-[23px]'>Streamlined, Secure, And Smart Reference Management</h1>
                    <div className='text-5 font-light font-notoSans opacity-[1] w-[380px]'>Request, Verify, Analyze and Archive Professional References – all in one platform</div>
                </div>
                <div className='flex gap-4'>
                    <button className='py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium'>Get Started for Free</button>
                    <button className='py-2 px-5 rounded-md text-sm bg-white text-secondaryColor font-medium'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;