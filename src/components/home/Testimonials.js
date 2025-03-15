import React from 'react';
import ClientCarousel from './ClientCarosel'

function Testimonials() {
    return (
        <div className='pt-[150px] pb-[110px]'>
            <div className='m-auto'>
                <div className='text-center'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>Client Testimonials</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        Join The Ranks Of <div className='text-primaryColor'> Our Clients</div>
                    </div></h2>
                    <p className='text-base font-light font-notoSans pt-8'>Discover how RefVault streamlines your reference management with a smooth, efficient process that saves you time and effort.</p>
                </div>
                <div className="flex justify-center items-center h-full pt-[64px]">
                    <ClientCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimonials