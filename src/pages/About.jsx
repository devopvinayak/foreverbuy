import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>At **Forever**, we believe fashion is more than just clothing — it’s a feeling that lasts.
            Our collections are designed to blend timeless style with modern trends, so you look confident every day.We focus on quality, comfort, and details that make every outfit special.
            From everyday essentials to statement pieces, Forever brings styles made to stay with you.
            Because true fashion isn’t temporary — it’s **Forever**.
          </p>
          <p> If you want it **more luxury**, **more minimal**, or **more youth-focused**, tell me the vibe and I’ll tweak it 🔥</p>

          <b className='text-gray-800'>OUR-MISSION</b>
          <p>At Forever, our mission is to make everyday fashion effortless and meaningful.
            We design styles that help you express yourself with confidence.
            Because great fashion should feel as good as it looks.</p>
        </div>
      </div>


      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>QUALITY ASSURANCE:</b>
          <p className='text-gray-600'>At Forever, quality is at the heart of everything we create.
            We are committed to using premium materials and precise craftsmanship.
            Every piece is designed for comfort, durability, and timeless appeal.
            Because true style deserves quality that lasts — Forever.</p>
        </div>
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>CONVINENCE:</b>
          <p className='text-gray-600'>At Forever, we prioritize convenience without compromising on style.
            From easy browsing to smooth checkout, we make shopping effortless.
            Our designs are made for everyday wear and simple living.
            Because great fashion should fit your life — not complicate it.</p>
        </div>
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
          <p className='text-gray-600'>We are committed to providing friendly, reliable, and responsive support at every step.
            From shopping to after-sales care, your satisfaction is our priority.
            Because great fashion deserves great service — Forever.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About