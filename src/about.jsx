import React from 'react'
import Team from './team.jpg'

function About() {
  return (
    <>
    <div className="flex justify-center">
    <div className="w-5/6 pt-20 pb-20 pr-20  md:mb-24 rounded-3xl  flex flex-col justify-center  bg-slate-100  md:flex-row">
      <div className="flex justify-center flex-col md:w-1/2 md:pr-5 lg:pt-4 xl:px-24 ">
        <span className=""><h1 className="text-2xl sm:text-3xl md:text-5xl  font-semibold"><span className="border-b-2 border-purple-600">Who We Are?</span> </h1></span>
        <span className="text-start mt-8 sm:mt-10 w- text-sm lg:text-lg"><p>You can buy property from our trusted and experienced escrow platform. We provide free consultation about the properties that are available for sale on our website.there is many property that you can buy from our trusted and reliable plateform, so please share this page with your friends and family members.</p></span>
      </div>
      <div className="md:w-1/2  flex justify-center pt-8 sm:pt-4 lg:pt-0 ">
        <img className=" rounded-3xl lg:h-86 w-4/5 lg:w-full  " src={Team} alt="" />
      </div>
      </div>
    </div>
    </>
  )
}

export default About
