import React from 'react';
import HomeBgBanner from '../../images/homeBannerBg.png'
import { FacebookIcon, InstagramIcon, LinkinedIcon } from '../constant/SvgFile';

function Banner() {
    return (
        <div
            className="w-full h-screen mt-[130px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${HomeBgBanner})` }}
        >
            <div className="w-full max-w-[1169px] mx-auto pt-[100px] md:pt-[150px] flex flex-col md:flex-row items-start px-4 md:px-0">
                <div className="text-white md:w-[540px] pb-10 md:pb-[43px]">
                    <h1 className="text-[32px] md:text-[50px] font-bold font-poppins leading-[1.15] pb-6">Streamlined, Secure, And Smart Reference Management</h1>
                    <p className="text-sm md:text-base font-light font-notoSans opacity-90 w-full md:w-[380px]">Request, Verify, Analyze and Archive Professional References – all in one platform</p>
                    <div className="flex gap-4 mt-6">
                        <button className="py-2 px-5 rounded-md bg-secondaryColor text-sm text-white font-medium">Get Started for Free</button>
                        <button className="py-2 px-5 rounded-md text-sm bg-white text-secondaryColor font-medium">Learn More</button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4 absolute right-4 md:right-[56px] top-1/2 transform -translate-y-1/2">
                    <div className="w-[2px] h-[100px] md:h-[130px] bg-white"></div>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkinedIcon />
                    <div className="w-[2px] h-[100px] md:h-[130px] bg-white"></div>
                </div>
            </div>
            <div className="w-[30px] h-[50px] rounded-[22px] border-[2px] border-white absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center space-y-[4px] cursor-pointer" onClick={() => console.log("Clicked me!")}>
                <div className="w-[2px] h-[17px] bg-white rounded-[3px]"></div>
                <div className="w-[2px] h-[2px] bg-white"></div>
                <div className="w-[2px] h-[2px] bg-white"></div>
            </div>
        </div>
    )
}

export default Banner;