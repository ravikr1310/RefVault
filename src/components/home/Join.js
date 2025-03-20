import React from 'react';
import JoinBg from '../../images/joinBg.png';

function Join() {
    return (
        <div className="w-full"
            style={{
                backgroundImage: `url(${JoinBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center pt-[91px]'>
                    <h2 className='text-[40px] font-bold font-poppins text-white leading-[2.85rem] text-center max-w-[962px] m-auto'>Join Thousands Making Smarter Decisions With RefVault.</h2>
                </div>
                <div className='flex items-center justify-center mt-[30px] pb-[90px] gap-5'>
                    <button className='py-[18px] px-[30px] rounded-[10px] bg-secondaryColor text-lg text-white font-medium font-poppins'>Sign Up for Free</button>
                    <button className='py-[18px] px-[30px] rounded-[10px] text-lg bg-white text-secondaryColor font-medium font-poppins'>Request a Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Join