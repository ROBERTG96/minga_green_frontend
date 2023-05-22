import React from 'react'
import { RiFacebookBoxFill, RiTwitterFill, RiVimeoFill, RiYoutubeFill, RiHeartLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className=''>
      <div className='h-[500px] hidden bg-footer w-full 
      bg-cover bg-center md:bg-contain md:hidden lg:block md:bg-no-repeat lg:-my-40 xl:bg-contain  xl:-my-28 2xl:-my-28 2xl:mt-0'
      >
      </div>
      <div className=''>
        <nav className='container mx-auto font-poppins sm:mt-5 md:my-0 lg:mt-20 xl:mt-10 2xl:mt-36'>
          <ul>
            <div className='flex items-center justify-center mx-auto'>
              <li className='mx-10 text-white md:mx-20'>
                <a href="">Home</a>
              </li>
              <li className='text-white mx-auto'>
                <a href="">Mangas</a>
              </li>
              <div className='mx-auto'></div>
              <li className='mx-auto'>
                <a href="">
                  <img
                    src="/src/assets/img/NavBar/logo.svg"
                    className=""
                    alt=""
                  />
                </a>
              </li>
              <div className='mx-auto'></div>

              <div className='flex mx-auto'>

                <li className='pr-8'>
                  <a href=""><RiFacebookBoxFill className='text-white md:text-black text-3xl'></RiFacebookBoxFill></a>
                  <div className=''>
                    <button className='bg-[#F9A8D4] mt-5 p-2 w-52 hidden md:block absolute text-white text-xl'>
                      Donate ♡
                    </button>
                  </div>
                </li>
                <li className='pr-8'>
                  <a href=""><RiTwitterFill className='text-white md:text-black text-3xl'></RiTwitterFill></a>
                </li>
                <li className='pr-7'>
                  <a href=""><RiVimeoFill className='text-white md:text-black text-3xl'></RiVimeoFill></a>
                </li>
                <li >
                  <a href=""><RiYoutubeFill className='text-white md:text-black text-3xl'></RiYoutubeFill></a>
                </li>
              </div>
            </div>

          </ul>

        </nav>

      </div>

    </div>
  )
}

export default Footer