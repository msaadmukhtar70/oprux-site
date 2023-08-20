import plumber from './plumber.png';
import home from './home.jpeg'
import worker from './worker.png'
import googleplay from './google-play-badge.png'
import appstore from './applestorebutton.svg'
function Hero(){
    return(
        <>
        <div className="flex w-full  top-0 ">
            {/* LEft Side */}
            <div className="w-full bg-cover bg-[url(./home.jpeg)] md:w-1/2  ">
                <div className="bg-black text-white bg-opacity-80">
                <div className="   h-full pl-5 sm:pl-10 pt-44 md:pt-60 pb-44 md:pl-16">
                <p className="uppercase text-xs md:tracking-widest font-semibold md:text-sm">INTRODUCING</p>
               <div className="flex"><h1 className="text-[8vw] tracking-wider font-bold">OPRUX</h1>
                <h1 className="text-[8vw] pl-4 tracking-wider font-bold md:hidden">WORKER</h1></div>
                <p className="text-sm md:text-lg w-4/5 pb-8 pt-6">A leading company of Home sevices like electrition plumbur etc. Lorem ipsum, dolor sit amet.  </p>
                <div className="flex pt-4 items-center">
                    <img src={googleplay} alt="" className="h-14 md:h-20" />
                    <img src={appstore} alt="app store" className="h-10 md:h-14" />
                </div> 
                </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="hidden md:block w-1/2 bg-cover bg-[url(./studio.jpg)]  ">
                <img className="absolute h-[52rem] pt-12 right-[573px] " src={worker} alt="" />
                <div className="bg-purple-800 text-white bg-opacity-70 h-full">
                <div className="   h-full pl-8 pt-64 pb-72">
                <h1 className="text-[8vw] pl-10 tracking-wide font-bold">SERVICES</h1>
                <p className="pt-6 uppercase text-xs md:text-sm tracking-widest font-semibold text-end w-5/6">Hire a professional Now ACCORDING TO YOUR NEED   </p>
                
        
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero