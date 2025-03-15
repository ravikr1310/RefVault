import React from 'react';
import BusinessMan from '../../images/smiling-businessman-his-office.png';
import WorkingProfessional from '../../images/group-people-working-out-business-plan-office.png';
import Students from '../../images/groupmates-learning-university-girl-looking-camera.png';
import Employers from '../../images/beautiful-young-businesswoman-making-eye-contact-while-sitting-amidst-colleagues-desk-meeting-office.png';
import Schools from '../../images/schools.png';

function WhoYouAre() {
    return (
        <div className='pt-[150px] pb-[110px] bg-white'>
            <div className='w-[1169px] m-auto'>
                <div className='text-center'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>Who You Are</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        Target Markets &<span className='text-primaryColor'> Benefits</span>
                    </div></h2>
                    <p className='text-base font-light font-notoSans pt-8'>Discover what RefVault can do for you—unlock the benefits of seamless, secure reference management.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[30px] mt-[123px] justify-between">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <img src={BusinessMan} alt='interview' />
                        </div>
                        <div className='text-base font-semibold text-black pt-8 pb-5'>Job Applicants</div>
                        <p className='text-sm font-light font-notoSans text-center max-w-[170px]'>Make your resume stand out with verified references.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <img src={WorkingProfessional} alt='interview' />
                        </div>
                        <div className='text-base font-semibold text-black pt-8 pb-5'>Working Professionals</div>
                        <p className='text-sm font-light font-notoSans text-center max-w-[170px]'>Build and maintain a portfolio of career endorsements.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <img src={Students} alt='interview' />
                        </div>
                        <div className='text-base font-semibold text-black pt-8 pb-5'>Students</div>
                        <p className='text-sm font-light font-notoSans text-center max-w-[170px]'>Secure academic and extracurricular references for future use.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <img src={Employers} alt='interview' />
                        </div>
                        <div className='text-base font-semibold text-black pt-8 pb-5'>Employers</div>
                        <p className='text-sm font-light font-notoSans text-center max-w-[170px]'>Automate and enhance hiring decisions with structured insights.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center">
                            <img src={Schools} alt='interview' />
                        </div>
                        <div className='text-base font-semibold text-black pt-8 pb-5'>Schools</div>
                        <p className='text-sm font-light font-notoSans text-center max-w-[170px]'>Streamline admissions with standardized, insightful references.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-[62px] gap-5'>
                    <button className='py-[18px] px-[30px] border-[2px] rounded-[10px] bg-secondaryColor text-lg text-white font-medium font-poppins'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default WhoYouAre