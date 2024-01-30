import React from 'react'
import Logo from "./Images/Logo.svg"

const Header = () => {
  return (
    <div className='flex justify-between p-5 px-52'>
      <div>
        <img alt='logo' src={Logo} />
      </div>
      <div className='flex items-center'>
        <ul className='flex gap-16'>
            <li>About</li>
            <li>Pricing</li>
            <li>Contach Us</li>
            <li>Login</li>
        </ul>
        <button className='mx-10 py-2 px-4 text-purple-600 border border-purple-600 rounded-full'>Start Free Trial</button>
      </div>
    </div>
  )
}

export default Header
