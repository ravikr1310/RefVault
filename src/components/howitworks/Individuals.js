import React from 'react';
import HowItWorksBg from '../../images/howitwork.png';
import DottedLineLeft from '../../images/Left.png';
import DottedLineRight from '../../images/Right.png';

const steps = [
    { title: "Create an Account", description: "Sign up to create your profile on Talent." },
    { title: "Request References", description: "Connect with former employers, clients, or trusted folks to request references." },
    { title: "Track Responses", description: "Monitor reference requests, get notified on responses, and manage your professional reputation." },
    { title: "Receive Analyzed Insights", description: "Gain AI-analyzed insights on reference data to enhance your credibility." },
    { title: "Build a Verified Portfolio", description: "Showcase verified testimonials from references, creating a credible portfolio." },
    { title: "Share With Ease", description: "Share your references through a public profile, link, or export to PDF." },
    { title: "Maintain Control", description: "Add and manage references to keep your portfolio up to date." },
    { title: "Third-Party Verification", description: "Enable third-party verification to add credibility to your profile." }
];
function Individuals() {
    return (
        <div className='pb-[110px] bg-[#F6F9FA] pt-[103px]'>
            <div className='max-w-[1169px] m-auto'>
                <div className='text-center'>
                    <div className='bg-primaryGray text-xs font-semibold rounded-[17px] py-[7px] px-5 inline-block'>How It Works</div>
                    <h2 className='text-[40px] font-bold font-poppins leading-[2.85rem] pt-5'><div>
                        How It Works For <span className='text-primaryColor'> Individuals</span>
                    </div></h2>
                    <p className='text-base font-light text-black font-notoSans pt-8 max-w-[816px] m-auto'>RefVault simplifies the process of collecting and managing references, ensuring you're always prepared for future opportunities. Here's how it works:</p>
                </div>
                <div className="flex flex-col items-center space-y-[90px] pt-[78px]">
                    {/* Step 1 */}
                    <div className="relative flex items-center w-full justify-start">
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Create An Account</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Sign up and set up your profile in minutes.
                            </p>
                        </div>
                        <div className="ml-6 flex items-center absolute right-[272px] top-[60px]">
                            <img src={DottedLineRight} alt='dotted line' />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center w-full justify-end">
                        <div className="mr-6 flex items-center absolute left-[271px] top-[80px]">
                            <img src={DottedLineLeft} alt='dotted line' />
                        </div>
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Request References</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Generate reference requests for your chosen referees using customizable, role-specific questionnaires.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center w-full justify-start">
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Track Responses</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Receive real-time updates when referees complete the questionnaires, ensuring you stay informed throughout the process.
                            </p>
                        </div>
                        <div className="ml-6 flex items-center absolute right-[272px] top-[79px]">
                            <img src={DottedLineRight} alt='dotted line' />
                        </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex items-center w-full justify-end">
                        <div className="mr-6 flex items-center absolute left-[271px] top-[80px]">
                            <img src={DottedLineLeft} alt='dotted line' />
                        </div>
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Receive Analyzed Insights</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                RefVault evaluates the responses and generates actionable insights in real time
                            </p>
                        </div>
                    </div>
                    {/* Step 5 */}
                    <div className="relative flex items-center w-full justify-start">
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Build A Verified Portfolio</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Store your verified and analyzed references in one secure location, creating a reusable portfolio for job or academic applications.
                            </p>
                        </div>
                        <div className="ml-6 flex items-center absolute right-[272px] top-[79px]">
                            <img src={DottedLineRight} alt='dotted line' />
                        </div>
                    </div>
                    {/* Step 6 */}
                    <div className="relative flex items-center w-full justify-end">
                        <div className="mr-6 flex items-center absolute left-[271px] top-[99px]">
                            <img src={DottedLineLeft} alt='dotted line' />
                        </div>
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Share With Ease</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Share your references directly with employers or institutions via a secure link or QR code, making your application seamless and professional.
                            </p>
                        </div>
                    </div>
                    {/* Step 7 */}
                    <div className="relative flex items-center w-full justify-start">
                        <div className="bg-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Maintain Control</h3>
                            <p className="text-black text-opacity-50 font-light text-sm">
                                Archive your references for future use and avoid burdening referees with repeat requests.
                            </p>
                        </div>
                        <div className="ml-6 flex items-center absolute right-[272px] top-[79px]">
                            <img src={DottedLineRight} alt='dotted line' />
                        </div>
                    </div>
                    {/* Step 8 */}
                    <div className="relative flex items-center w-full justify-end">

                        <div className="bg-[#256F77]  text-white shadow-custom-secondary p-10 rounded-xl w-3/6">
                            <h3 className="font-semibold text-lg pb-5">Third-Party Verification</h3>
                            <p className="text-white text-opacity-50 font-light text-sm">
                                Third parties can easily verify the authenticity of references shared from your portfolio, enhancing trust and credibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Individuals;