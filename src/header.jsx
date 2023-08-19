import React , {useState} from 'react'
import './App.css' 
import svg from './react.svg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";
function Header(){
    const [showMenu,setShowMenu] = useState(false)
        const handleshowMenu = () => {
            setShowMenu(!showMenu)
        }

    return (
        <header className="bg-transparant w-full z-10 absolute ">
            <div className="flex justify-between text-white  ">
                {/* LOGO */}
                <div>
                    <img src={svg} className='h-12 mx-6 my-4' alt="" />
                </div>
                {/* MENU */}
                <div>
                    <ul className="hidden md:flex my-7 text-lg pr-8">
                        <li className='px-4'><a href="#">Home</a></li>
                        <li className='px-4'><a href="#">About</a></li>
                        <li className='px-4'><a href="#">Services</a></li> 
                         <li className='px-4'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                {/* HAMBURGER  */}
                <div className='md:hidden' onClick={handleshowMenu}>
                    {!showMenu ? <AiOutlineClose className='mx-6 mt-6 mb-4' size={30}/> : <AiOutlineMenu className='mx-6 mt-6 mb-4' size={30}/> }
                
                </div>
                {/* HAMBURGER MENU */}
                <div className={!showMenu ? 'fixed  bg-[#7a3ae7] left-0 top-20 text-lg text-white w-1/2 h-full ease-in-out duration-300 md:hidden': 'fixed  bg-[#7a3ae7] top-20 h-full  left-[-100%] ease-in-out duration-300'}>
                    <ul className=' uppercase'>
                        <li className='p-4 border-b border-white'><a href='##'>Home</a></li>
                        <li className='p-4 border-b border-white'><a href='##'>About</a></li>
                        <li className='p-4 border-b border-white'><a href='##'>Services</a></li>
                        <li className='p-4 border-b border-white'><a href='##'>Contact</a></li>
                    </ul>
                </div>

                
            </div>
        </header>
    )
}
export default Header