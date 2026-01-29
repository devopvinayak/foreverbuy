import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">
        Subscribe for a front-row seat to the latest trends and members-only deals.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input required className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' />
        <button className='cursor-pointer bg-black text-white text-xs py-4 px-10' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox