import React from 'react';

function OurProcess() {
    return (
        <div className='pt-[150px] pb-[110px]'>
            <div className='m-auto'>
                <div className='text-center'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>Our Process</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        How It<span className='text-primaryColor'> Works</span>
                    </div></h2>
                    <p className='text-base font-light font-notoSans pt-8 max-w-[717px] m-auto'>Discover how RefVault streamlines your reference management with a smooth, efficient process that saves you time and effort.</p>
                </div>
                <div className="flex items-center mt-[123px]">
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee space-x-[30px]">
                            <div className="px-10 py-5 bg-white rounded-[10px] shadow-custom-secondary max-w-[300px] min-h-[450px]">
                                <div className="flex items-center justify-center h-[196px]">
                                    01
                                </div>
                                <div className='text-lg font-semibold text-primaryColor max-w-[181px] leading-[1.3] py-5'>Create Your Account</div>
                                <p className='text-sm font-light font-notoSans justify-start'>Sign up and create a profile as an institution or individual.</p>
                            </div>
                            <div className="px-10 py-5 bg-white rounded-[10px] shadow-custom-secondary max-w-[300px] min-h-[450px]">
                                <div className="flex items-center justify-center h-[196px]">
                                    02
                                </div>
                                <div className='text-lg font-semibold text-primaryColor max-w-[181px] leading-[1.3] py-5'>Start A Reference Project</div>
                                <p className='text-sm font-light font-notoSans justify-start'>Initiate a project to gather professional references-whether as an institution seeking insights for a role or program, or an individual building a reference portfolio.</p>
                            </div>
                            <div className="px-10 py-5 bg-white rounded-[10px] shadow-custom-secondary max-w-[300px] min-h-[450px]">
                                <div className="flex items-center justify-center h-[196px]">
                                    02
                                </div>
                                <div className='text-lg font-semibold text-primaryColor max-w-[181px] leading-[1.3] py-5'>Deploy Reference Questionnaires</div>
                                <p className='text-sm font-light font-notoSans justify-start'>Select from RefVault’s library of reference questionnaires tailored to various roles and programs. Send to referees via email and mobile for a hassle-free experience.</p>
                            </div>
                            <div className="px-10 py-5 bg-white rounded-[10px] shadow-custom-secondary max-w-[300px] min-h-[450px]">
                                <div className="flex items-center justify-center h-[196px]">
                                    02
                                </div>
                                <div className='text-lg font-semibold text-primaryColor max-w-[181px] leading-[1.3] py-5'>Track Responses In Real-Time</div>
                                <p className='text-sm font-light font-notoSans justify-start'>Monitor progress with instant updates as referees complete their submissions. Stay informed every step of the way without delays.</p>
                            </div>
                            <div className="px-10 py-5 bg-white rounded-[10px] shadow-custom-secondary max-w-[300px] min-h-[450px]">
                                <div className="flex items-center justify-center h-[196px]">
                                    02
                                </div>
                                <div className='text-lg font-semibold text-primaryColor max-w-[181px] leading-[1.3] py-5'>Receive Analyzed Insights</div>
                                <p className='text-sm font-light font-notoSans justify-start'>RefVault analyzes questionnaires in real-time, delivering insights that help institutions to effectively compare candidates.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-[62px] gap-5'>
                    <button className='py-[18px] px-[30px] border-[2px] rounded-[10px] bg-secondaryColor text-lg text-white font-medium font-poppins'>See How It Works</button>
                </div>
            </div>
        </div>
    )
}

export default OurProcess