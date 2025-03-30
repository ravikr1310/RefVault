import React from 'react';
import ZeroOne from '../../images/01.png';
import ZeroTwo from '../../images/02.png';
import ZeroThree from '../../images/03.png';
import ZeroFour from '../../images/04.png';
import ZeroFive from '../../images/05.png';
import ZeroSix from '../../images/06.png';

function Institutions() {
    return (
        <div className='pb-[110px] bg-white pt-[103px]'>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center mb-20'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>How It Works</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        How It Works For <span className='text-primaryColor'> Institutions</span>
                    </div></h2>
                    <p className='text-base font-light text-black font-notoSans pt-8 max-w-[816px] m-auto'>RefVault revolutionizes the reference-checking process, making it fast, efficient, and insightful for employers and institutions. Here's how it works:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-4xl mx-auto p-6">
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-[44%_56%] gap-[30px] mx-auto'>
                            <div className="bg-[#F6F9FA] p-10 rounded-lg relative">
                                <span className="absolute top-2 right-4 text-3xl text-gray-300 font-bold">
                                    <img className='w-[70px] relative -top-[37px] -left-[28px]' src={ZeroOne} alt='01' />
                                </span>
                                <h3 className="font-semibold text-lg pb-5">Create An Account</h3>
                                <p className='font-light text-sm text-black text-opacity-50'>Sign up and set up your profile in minutes.</p>
                            </div>
                            <div className="bg-[#256F77] text-white p-10 rounded-lg relative top-[53px]">
                                <span className="absolute top-2 right-4 text-3xl text-white/50 font-bold">
                                    <img className='w-[70px] relative -top-[44px] -left-[13px]' src={ZeroTwo} alt='02' />
                                </span>
                                <h3 className="font-semibold text-lg pb-5">Create A Reference Project</h3>
                                <p className='font-light text-sm text-white text-opacity-50'>Set up a reference project to manage candidates for a specific role or program.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-[44%_56%] gap-[30px] mx-auto'>
                            <div className="bg-white border border-[#256F77] p-10 rounded-lg relative">
                                <h3 className="font-semibold text-lg pb-5">Choose How To Collect Referee Details</h3>
                                <ul className="list-none text-sm mt-2">
                                    <li className='flex justify-center pb-[15px]'><span className="font-semibold text-base text-primaryColor pr-6">01</span>
                                        <div className='font-light text-sm font-notoSans'>Obtain referees' details directly from applicants and input them into RefVault.</div>
                                    </li>
                                    <li className='flex justify-center'><span className="font-semibold text-base text-primaryColor pr-6">02</span>
                                        <div className='font-light text-sm'>Generate a Reference Request Link and share it with applicants. Applicants can use the link to enter their own and their referees’ details, reducing administrative workload.</div></li>
                                </ul>
                                <span className="bottom-[44px] -left-[65px] text-3xl text-gray-300 font-bold absolute">
                                    <img className='w-[70px]' src={ZeroThree} alt='03' />
                                </span>
                            </div>
                            <div className="bg-[#F6F9FA] p-10 rounded-lg relative max-h-fit top-[57px]">
                                <span className="absolute top-2 right-4 text-3xl text-gray-300 font-bold">
                                    <img className='w-[70px] relative top-[17px] -right-[31px]' src={ZeroFour} alt='04' />
                                </span>
                                <h3 className="font-semibold text-lg pb-5">Deploy Reference Requests</h3>
                                <p className='font-light text-sm text-black text-opacity-50'>RefVault sends reference requests automatically to referees, keeping you updated.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-[44%_56%] gap-[30px] mx-auto'>
                            <div className="bg-black text-white p-10 rounded-lg relative">
                                <h3 className="font-semibold text-lg pb-5">Verification For Trust And Accuracy</h3>
                                <p className='font-light text-sm text-white text-opacity-50'>Ensures all references are authentic and credible, providing peace of mind.</p>
                                <span className="absolute top-2 right-4 text-3xl text-gray-300 font-bold">
                                    <img className='w-[70px] relative top-[169px] right-[10px]' src={ZeroSix} alt='06' />
                                </span>
                            </div>
                            <div className="bg-[#F6F9FA] text-black p-10 rounded-lg relative -top-[130px]">
                                <h3 className="font-semibold text-lg pb-5">Receive Analyzed Insights</h3>
                                <p className='font-light text-sm text-black text-opacity-50'>RefVault evaluates responses and generates actionable insights in real time.</p>
                                <span className="absolute top-2 right-4 text-3xl text-white/50 font-bold">
                                    <img className='w-[70px] relative -bottom-[165px] right-[31px]' src={ZeroFive} alt='05' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institutions