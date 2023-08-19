import React from 'react'
import phone from './phone.png'
import googleplay from './google-play-badge.png'
import appstore from './applestorebutton.svg'

function Mobile() {
    return (
        <div className="flex pb-8 bg-black pt-8 text-white ">
            {/* left */}
            <div className="w-1/2 flex flex-col justify-end items-center  ml-32 ">
                <div className="pl-20">
                <h1 className="text-5xl font-semibold py-4">Book a Worker Now.</h1>
                <p className="text-lg w-{500px}">Install our oprux app and book our worker now Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.x``.</p>
                <div className="flex pt-4 items-center">
                    <img src={googleplay} alt="" className="h-20" />
                    <img src={appstore} alt="app store" className=" h-14" />
                </div>  
              
                </div>
            </div>
            {/* right */}
            <div className="w-1/2 absolute left-[758px] top-[1800px] ">
                <img className=" h-[27rem] w-[34rem] " src={phone} alt="" />
               

            </div>
           
        </div>
    )
}
export default Mobile