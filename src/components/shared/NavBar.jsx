import React from 'react'

const NavBar = () => {
    return (
        <div >
            <nav className='flex sm:justify-between p-3 flex-row-reverse mt-3 mr-4 '>
                <div className='bg-black' >
                    <img src="src/assets/img/NavBar/Minga.png" alt="" className='' />
                </div>
                <ul>
                    <li >
                    </li>
                    <li>
                        <a href="" className=''>Menu</a>
                    </li>
                </ul>
            </nav>

            <div className='grid grid-cols-3 gap-4 place-content-between h-48'>
                <div>
                    <img src="src/assets/img/NavBar/Rectangle605.png" className='w-[78.625rem] h-[16.563rem]' alt="" />
                </div>
                <div>
                    <img src="src/assets/img/NavBar/8b8e139c764c05a681947b2d6855bd331.png" className='h-[19.188rem] w-[17.32rem]' alt="" />
                </div>


            </div>

        </div>
    )
}

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

export default NavBar