import React from 'react';
import Banner from '../images/Banner.png'

function Home() {
    return (
        <div
            className="w-full h-[500px] flex items-center justify-center" // You can customize the height as needed
            style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover', // Ensure the image covers the whole div
                backgroundPosition: 'center', // Position the image in the center
            }}
        >
            <div className='text-center text-white'>
                <h1 className='text-[40px] font-bold font-poppins'>Features</h1>
                <div className='text-[21px] font-notoSans'>Home / Features</div>
            </div>
        </div>
    )
}

export default Home