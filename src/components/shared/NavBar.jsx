import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className="flex">
      <button className="">
        <RxHamburgerMenu className="h-12 w-7 bg-gradient-to-tr text-[#F472B6]"></RxHamburgerMenu>
      </button>
      <div className="self-end">
        <img src="/src/assets/img/NavBar/logo.svg" alt="" />
      </div>
    </nav>
  );
};

/* 
<div classNameNameName=''>
                    <img src="src/assets/img/NavBar/8b8e139c764c05a681947b2d6855bd331.png" classNameNameName='h-[19.188rem] w-[17.32rem] ' alt="" srcset="" />
                </div>

                <img src="src/assets/img/NavBar/image3.png" classNameNameName='h-72' alt="" srcset="" />
*/

/* prueba responsive
 <section classNameNameName='container mx-auto py-10 text-center bg-black text-white 
            sm:bg-gray-300 sm:text-black 
            md:bg-blue-600 md:text-white
            lg:bg-pink-500
            xl:bg-green-400
            2xl:bg-yellow-500' >
                NavBar
            </section>
             */

export default NavBar;
