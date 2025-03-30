import React from 'react';
import JoinBg from '../../images/joinBg.png';

function Opportunity() {
    return (
        <div className="w-full"
            style={{
                backgroundImage: `url(${JoinBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center pt-[91px]'>
                    <h2 className='font-bold text-[28px] leading-[40px] font-poppins text-white text-center max-w-[1027px] m-auto'>Start building your reference portfolio with RefVault today and be ready for every opportunity!</h2>
                </div>
                <div className='flex items-center justify-center mt-[30px] pb-[90px] gap-5'>
                    <button className='py-[18px] px-[30px] rounded-[10px] text-lg bg-[#1D0D32] text-white font-medium font-poppins'>Get Started Now</button>
                </div>
            </div>
        </div>
    )
}

export default Opportunity;