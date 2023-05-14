import React from "react";

const NavBar = () => {
  return (
    <div className="mx-auto p-10">
      <nav className="flex flex-wrap justify-between">
        <button>Aqui</button>
        <div className="self-end">
          <img src="/src/assets/img/NavBar/logo.svg" alt="" />
        </div>
      </nav>
    </div>
  );
};

/* 
<div className=''>
                    <img src="src/assets/img/NavBar/8b8e139c764c05a681947b2d6855bd331.png" className='h-[19.188rem] w-[17.32rem] ' alt="" srcset="" />
                </div>

                <img src="src/assets/img/NavBar/image3.png" className='h-72' alt="" srcset="" />
*/

/* prueba responsive
 <section className='container mx-auto py-10 text-center bg-black text-white 
            sm:bg-gray-300 sm:text-black 
            md:bg-blue-600 md:text-white
            lg:bg-pink-500
            xl:bg-green-400
            2xl:bg-yellow-500' >
                NavBar
            </section>
             */

export default NavBar;
