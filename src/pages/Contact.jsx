import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img src={assets.contact_img} className='w-full sm:max-w-[480px]' alt="" />

        <div className="flex flex-col items-start gap-6 justify-center">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Jaynagar Metro Station <br /> Banglore</p>
          <p className='text-gray-500'>TEL: +91-6363088333 <br /> Email: contact@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers @ Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
      <NewsletterBox />
    </div>
  )
}

export default Contact