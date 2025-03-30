import React from 'react';
import HowItWorksBg from '../../images/howitwork.png';

function BannerHitW() {
    return (
        <div className="w-full mt-[47px] h-[573px]"
            style={{
                backgroundImage: `url(${HowItWorksBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center pt-[300px]'>
                    <h2 className='text-[40px] font-bold font-poppins text-white leading-[2.85rem] text-center max-w-[962px] m-auto'>How It Works</h2>
                </div>
                <div className='flex items-center justify-center mt-[20px] pb-[90px] gap-5'>
                    <h4 className='text-[22px] font-light text-white text-opacity-50'>Home / How It Works</h4>
                </div>
            </div>
        </div>
    )
}

export default BannerHitW;