import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-small">
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Discover fashion designed to fit your lifestyle — timeless styles, premium quality, and effortless comfort in every piece.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>

            <div>
                <p className='tex-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-432-890</li>
                    <li>forever.contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2026 @forever.com all rights reversed</p>
    </div>
  )
}

export default Footer