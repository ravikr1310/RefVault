import React from 'react'
import { MailIcon, PhoneCallIcon, HeadSetPhonesIcon } from '../../constant/SvgFile'

function TopHeader() {
    return (
        <div className='py-[13px] flex items-center'>
            <div className='lg:w-[1169px] md:w-[722px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-0 p-3 pl-0 pr-0'>
                <div className='flex flex-col md:flex-row items-center gap-3 md:gap-5'>
                    <div className='flex items-center gap-2'>
                        <MailIcon />
                        <span className='text-white text-xs'>refvaultsupport@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PhoneCallIcon />
                        <span className='text-white text-xs'>+1 253 6586 120</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <HeadSetPhonesIcon />
                    <span className='text-white text-xs'>Support</span>
                </div>
            </div>

        </div>
    )
}

export default TopHeader