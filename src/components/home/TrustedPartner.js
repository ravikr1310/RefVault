import React from 'react'

function TrustedPartner() {
    const logos = [
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
        'logo1.png',
        'logo2.png',
        'logo3.png',
        'logo4.png',
        'logo5.png',
    ];
    return (
        <div className='pb-[110px] bg-white'>
            <div className='text-center'>
                <h2 className='text-xl font-poppins font-bold pb-[60px]'>Our Trusted Partners</h2>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex animate-marquee space-x-[152px]">
                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="h-20 w-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedPartner