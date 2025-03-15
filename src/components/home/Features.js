import React from 'react';
import FeaturesBg from '../../images/featuresBg.png';
import { SpeedometerIcon, ValidationIcon, AnalyticIcon, ArrowIcon, ClickIcon, ConfidentialIcon } from '../constant/SvgFile';
import FeatureCarosel from './FeatureCarosel';

function Features() {
    return (
        <div className="w-full h-[1080px]"
            style={{
                backgroundImage: `url(${FeaturesBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className='w-[1169px] m-auto'>
                <div className='text-center pt-[103px]'>
                    <div className='bg-white bg-opacity-20 text-xs text-white font-semibold font-poppins rounded-[17px] py-[7px] px-5 inline-block'>Features</div>
                    <h2 className='text-[40px] font-bold font-poppins text-white leading-[2.85rem] pt-5 text-center'>Our Features</h2>
                    <p className='text-base font-light font-notoSans pt-8 text-white max-w-[508px] m-auto'>Explore the powerful features that make our platform the ultimate resource for securing trusted references.</p>
                </div>
                <div className="flex justify-center items-center h-full pt-[64px]">
                    <FeatureCarosel />
                </div>
            </div>
        </div>
    )
}

export default Features