import React from 'react'
import logo from "./Images/Logo.svg"
import socialmediaicon from "./Images/Social Media icons.svg"
import send from "./Images/Icon ionic-ios-send.svg"
import image7 from "./Images/image 7.png"

const Footer = () => {
  return (
    <div className='mx-64 my-20'>
      <div className='flex justify-between gap-10'>
        <div className='w-40'>
            <img alt='logo' src={logo} />
            <p className='my-4 font-metropolis text-xs font-medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</p>
            <div className='my-4'>
                <img alt='facebook' src={socialmediaicon} />
            </div>
        </div>
        <div>
            <h1 className='font-metropolis text-base font-bold'>Product</h1>
            <ul className='font-metropolis text-xs font-medium'>
                <li className='my-2'>Connections</li>
                <li className='my-2'>Protocols</li>
                <li className='my-2'>Personas</li>
                <li className='my-2'>Integrations</li>
                <li className='my-2'>Catalog</li>
                <li className='my-2'>Pricing</li>
                <li className='my-2'>Security</li>
                <li className='my-2'>GDPR</li>
            </ul>
        </div>
        <div>
            <h1 className='font-metropolis text-base font-bold'>For Developers</h1>
            <ul className='font-metropolis text-xs font-medium'>
                <li className='my-2'>Docs</li>
                <li className='my-2'>API</li>
                <li className='my-2'>Open Source</li>
                <li className='my-2'>Engineering Team</li>
            </ul>
        </div>
        <div>
            <h1 className='font-metropolis text-base font-bold'>company</h1>
            <ul className='font-metropolis text-xs font-medium'>
                <li className='my-2'>Careers</li>
                <li className='my-2'>Blog</li>
                <li className='my-2'>Press</li>
            </ul>
        </div>
        <div>
            <h1 className='font-metropolis text-base font-bold'>Support</h1>
            <ul className='font-metropolis text-xs font-medium'>
            <li className='my-2'>Help Center</li>
            <li className='my-2'>contact Us</li>
            <li className='my-2'>Security</li>
            <li className='my-2'>Bulletins</li>
            <li className='my-2'>Documentation</li>
            <li className='my-2'>Partner</li>
            <li className='my-2'>Portal</li>
            </ul>
        </div>
        <div>
            <h1 className='font-metropolis text-base font-bold'>Newsletter</h1>
            <div className='border border-slate-100 py-2 px-4 my-5 justify-center shadow-lg'>
                <input type='text' placeholder='Email' />
                <button>
                    <img alt='send' src={send} />
                </button>
            </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <h3 className='font-metropolis text-base font-bold'>Rahul Rao </h3>
        <img alt='img' src={image7} />
      </div>
    </div>
  )
}

export default Footer
