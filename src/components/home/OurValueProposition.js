import React from 'react';
import OutValue from '../../images/ourValue.png';
import { SpeedometerIcon, ValidationIcon, AnalyticIcon, ArrowIcon, ClickIcon, ConfidentialIcon } from '../constant/SvgFile';

function OurValueProposition() {
    return (
        <div className="w-full"
            style={{
                backgroundImage: `url(${OutValue})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center pt-[103px]'>
                    <div className='bg-white bg-opacity-20 text-xs text-white font-semibold font-poppins rounded-[17px] py-[7px] px-5 inline-block'>Our Value Proposition</div>
                    <h2 className='text-[40px] font-bold font-poppins text-white leading-[2.85rem] pt-5 text-center'>Why Choose RefVault?</h2>
                    <p className='text-base font-light font-notoSans pt-8 text-white max-w-[508px] m-auto'>Discover the value RefVault brings to simplifying and safeguarding your reference process.</p>
                </div>
                <div className="flex justify-center items-center h-full pt-[64px] md:px-3 lg:px-0">
                    <div className="grid grid-cols-2 lg:gap-[30px] md:gap-[10px]">
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <SpeedometerIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Efficiency</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>Save up to 50% of the time spent on reference checks.</p>
                        </div>
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <ValidationIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Credibility</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>Verified, trusted references every time.</p>
                        </div>
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <AnalyticIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Insights</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>Gain actionable data to improve hiring decisions.</p>
                        </div>
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <ArrowIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Reuse</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>No more repeated requests—use archived references anytime.</p>
                        </div>
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <ClickIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Accessibility</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>Manage references anytime, anywhere with a user-friendly platform.</p>
                        </div>
                        <div className='py-[30px] lg:px-[40px] md:px-[10px] bg-white bg-opacity-20 backdrop-blur-md text-white rounded-[10px] max-w-[400px]'>
                            <ConfidentialIcon />
                            <h2 className='pt-[33px] text-lg font-semibold'>Confidentiality</h2>
                            <p className='pt-5 text-base font-light lg:max-w-[300px]'>Protect sensitive information with industry- leading security measures.</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-[60px] gap-5 pb-[110px]'>
                    <button className='py-[18px] px-[30px] rounded-[10px] bg-secondaryColor text-lg text-white font-medium font-poppins'>Discover the Difference</button>
                </div>

            </div>
        </div>
    )
}

export default OurValueProposition