import React from 'react'
import Image1 from "./Images/image 1 (1).png"
import star from "./Images/star.svg"
import eye from "./Images/Icon awesome-eye.svg"
import chart from "./Images/chart-bar-33.svg"
import newsletter from "./Images/newsletter-dev.svg"
import timeline from "./Images/timeline.svg"
import image6 from "./Images/image 6.png"
import compass from "./Images/compass.svg"
import electronic from "./Images/electronic-circuit.svg"
import profile from "./Images/Profile.svg"
import token from "./Images/Tonkean.svg"
import bigSpring from "./Images/BigSpring.svg"
import clearbit from "./Images/Clearbit.svg"
import mine from "./Images/Mine.svg"
import shake from "./Images/Shake.svg"
import googlesign from "./Images/btn_google_signin_dark_normal_web@2x.svg"
import acenture from "./Images/accenture-4.svg"
import react from "./Images/react.svg"
import airbnb from "./Images/airbnb.svg"
import sky from "./Images/sky-4.svg"
import image4 from "./Images/Image4.png"


const Body = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-purple-100 to-blue-100 opacity-47 flex justify-center p-40">
                <div className='inline-flex flex-col items-start gap-6 w-2/6'>
                    <div className="flex p-2 justify-center items-center gap-3 rounded-3xl bg-purple-200">
                        <img alt='icon' src={star} />
                        <p className="text-purple-700 font-metropolis font-medium text-base">v3.1 released.
                            <span className='underline'>Learn more</span></p>
                    </div>
                    <h1 className='font-metropolis text-4xl font-bold'>Your data with real-time analytics</h1>
                    <p>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                    <div className='flex justify-start gap-5'>
                        <button className='bg-purple-700 rounded-full py-2 px-4'>Start free trial</button>
                        <button className='bg-white rounded-full py-2 px-4'>Learn more</button>
                    </div>
                </div>
                <div>
                    <img alt='pic' src={Image1} />
                </div>

            </div>

            <div className="inline-flex flex-col justify-center items-center gap-6 px-52 py-36">
                <button className='flex py-2 px-4 justify-center items-center gap-3 rounded-full bg-purple-100'>
                    <img alt='eye' src={eye} /> why Qubly</button>
                <h2 className=' text-center font-metropolis font-bold text-2xl leading-10'>Get acctionable insights from Big Data in 3 steps</h2>
                <p className='text-center font-metropolis font-medium text-base'>Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <div className='flex gap-10'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img alt='business' src={chart} />
                        <h6 className='font-metropolis text-xl font-bold'>Valuable business insights</h6>
                        <p>Collect processed & cleansed data that is ready to bbe analyzed to gather valuable business insights.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img alt='algorithms' src={newsletter} />
                        <h6 className='font-metropolis text-xl font-bold'>Powerful Algorithms</h6>
                        <p>With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <img alt='data' src={timeline} />
                        <h6 className='font-metropolis text-xl font-bold'>Data in real-time</h6>
                        <p>Collect data in real-time from multiple channels and move it into a data lake, in its original format.</p>
                    </div>
                </div>
            </div>

            <div className='my-20 mx-64'>
                <div className='flex items-center gap-20'>
                <div>
                    <img alt='pic' src={image4} />
                </div>
                <div className='flex flex-col  gap-4'>
                    <div>
                        <button className='flex py-2 px-4 justify-center items-center gap-3 rounded-full bg-purple-100'>
                            <img alt='eye' src={electronic} /> For Product Teams</button>
                    </div>
                    <h2 className='font-metropolis text-3xl font-bold'>Launch with the best stack</h2>
                    <p>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behing</p>
                </div>
            </div>
            </div>

            <div className='my-20 ml-64'>
                <div className='flex items-center'>
                    <div className='w-[45%] flex flex-col  gap-4'>
                        <div className=''>
                            <button className='flex py-2 px-4 justify-center items-center gap-3 rounded-full bg-purple-100'>
                                <img alt='eye' src={compass} /> For Engineering Teams</button>
                        </div>
                        <h2 className='font-metropolis text-3xl font-bold'>Data-driven pipelines in minutes</h2>
                        <p>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behing</p>
                    </div>
                    <div>
                        <img alt='pic' src={image6} />
                    </div>
                </div>
            </div>
            
            <div className='relative my-40 overflow-hidden'>
    <div class="bg-gradient-to-br from-purple-50 to-blue-100 opacity-47 transform -rotate-[8deg] origin-top-left absolute top-[40%] left-0 w-[150%] h-2/3"></div>
    <div className='py-20 mx-64 relative z-10'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h6 className='text-center font-metropolis text-3xl font-medium'>"What i love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process" </h6>
            <img alt='user' src={profile} />
            <div className='text-center font-metropolis text-base font-bold'>
                <p>Guillaume Cabane</p>
                <p>CTO @ BigSpring</p>
            </div>
            <hr />
            <div className='flex justify-between gap-5 w-full'>
                <img alt='company logo' src={token} />
                <img alt='company logo' src={bigSpring} />
                <img alt='company logo' src={clearbit} />
                <img alt='company logo' src={mine} />
                <img alt='company logo' src={shake} />
            </div>
        </div>
    </div>
</div>



            <div className='my-40 mx-64'>
                <div className='flex gap-10'>
                    <div className='w-1/2'>
                        <h2 className='font-metropolis text-3xl font-bold'>See why the world's best companies use Qubly to become truly data-driven.</h2>
                        <div className='flex items-center my-10'>
                            <div className='border-b h-0 w-[40%]'></div>
                            <p className='mx-2'>Trusted By</p>
                            <div className='border-b h-0 w-[40%]'></div>
                        </div>
                        <div className='flex justify-between p-10'>
                            <img alt='cmp' src={acenture} />
                            <img alt="cmp" src={react} />
                        </div>
                        <div className='flex justify-between p-10'>
                            <img alt='cmp' src={airbnb} />
                            <img alt="cmp" src={sky} />
                        </div>
                    </div>
                    <div className='bg-purple-50 w-1/2 relative h-[500px]'>
    <div className='flex flex-col p-10 justify-center items-center gap-4 w-96 bg-white absolute top-[-7%] left-[10%]'>
        <h2>Sign Up</h2>
        <form className='flex flex-col gap-4 w-full'>
            <button className='bg-purple-700 w-full text-white py-2 px-3'>Start your free trial</button>
            <input className='border border-slate-300 rounded-sm p-3' type='email' placeholder='Your primary email' />
            <input className='border border-slate-300 rounded-sm p-3' type='password' placeholder='password' />
            <input className='border border-slate-300 rounded-sm p-3' type='password' placeholder='Re-type Password' />
        </form>
        <h2 className=''>OR</h2>
        <button className=''>
            <img alt='logo' src={googlesign} />
        </button>
        <div className='border-b h-0 w-[90%]'></div>
        <h2 className=''>Already have an account?
            <a href="">Login</a></h2>
    </div>
</div>
                </div>
            </div>
        </div>
    )
}

export default Body
