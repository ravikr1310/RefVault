import React from 'react'
import { MailIcon, PhoneCallIcon, HeadSetPhonesIcon } from '../../constant/SvgFile'

function TopHeader() {
    return (
        <div className='py-[13px] flex items-center'>
            <div className='w-[1169px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='flex items-center gap-2'>
                        <MailIcon />
                        <span className='text-white text-xs'>refvaultsupport@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2 pl-5'>
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