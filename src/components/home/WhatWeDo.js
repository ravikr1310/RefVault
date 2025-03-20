import React from 'react'
import { InterviewIcon, VerifyIcon, BusinessIcon, ArchiveIcon } from '../constant/SvgFile'

function WhatWeDo() {
    return (
        <div className='pt-[150px] pb-[110px] relative'>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>What We Do</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        What Can <span className='text-primaryColor'>RefVault</span>
                    </div> Do For You?</h2>
                    <p className='text-base font-light font-notoSans pt-8'>Discover what RefVault does to simplify your reference experience</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[10px] mt-[123px] md:px-3 lg:px-0 justify-between">
                    <div className="flex flex-col items-center bg-white px-11 pb-10 shadow-custom-light rounded-2xl">
                        <div className="rounded-full bg-primaryColor w-[80px] h-[80px] flex items-center justify-center shadow-custom-primary relative -top-10">
                            <InterviewIcon />
                        </div>
                        <div className='text-lg font-semibold text-black pb-5'>Request</div>
                        <p className='text-sm font-light font-notoSans text-center'>Simplify and standardize reference collection with tailored questionnaires.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white px-11 pb-10 shadow-custom-light rounded-2xl">
                        <div className="rounded-full bg-primaryColor w-[80px] h-[80px] flex items-center justify-center shadow-custom-primary relative -top-10">
                            <VerifyIcon />
                        </div>
                        <div className='text-lg font-semibold text-black pb-5'>Verify</div>
                        <p className='text-sm font-light font-notoSans text-center'>Ensure referee authenticity through advanced digital tools.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white px-11 pb-10 shadow-custom-light rounded-2xl">
                        <div className="rounded-full bg-primaryColor w-[80px] h-[80px] flex items-center justify-center shadow-custom-primary relative -top-10">
                            <BusinessIcon />
                        </div>
                        <div className='text-lg font-semibold text-black pb-5'>Analyze</div>
                        <p className='text-sm font-light font-notoSans text-center'>Unlock meaningful insights to make data-backed decisions.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white px-11 pb-10 shadow-custom-light rounded-2xl">
                        <div className="rounded-full bg-primaryColor w-[80px] h-[80px] flex items-center justify-center shadow-custom-primary relative -top-10">
                            <ArchiveIcon />
                        </div>
                        <div className='text-lg font-semibold text-black pb-5'>Archive</div>
                        <p className='text-sm font-light font-notoSans text-center'>Securely store reusable references for the future.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-[62px] gap-5'>
                    <button className='py-[18px] px-[30px] border-[2px] rounded-[10px] bg-secondaryColor text-lg text-white font-medium font-poppins'>Sign Up for Free</button>
                    <button className='py-[18px] px-[30px] border-[2px] border-secondaryColor rounded-[10px] text-lg bg-white text-secondaryColor font-medium font-poppins'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo