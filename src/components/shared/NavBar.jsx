import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react"

export default function NavBar() {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <div className="bg-[#EBEBEB] hidden md:block ">
        <nav onClick={() => setDisplay(!display)} className="flex justify-between items-center sm:justify-between md:pb-8 sm:px-10 md:px-12">
          <button className="mx-5 mb-4">
            <RxHamburgerMenu className="h-10 w-8 bg-gradient-to-tr text-[#F472B6]"></RxHamburgerMenu>
          </button>
          <div className="my-5">
            <img
              src="/src/assets/img/NavBar/logo.svg"
              className="w-[85%] my-5 md:block"
              alt=""
            />
          </div>
        </nav>
        {display && (
          <div className="w-44 top-0 fixed bg-pink-400 h-screen">
            <p onClick={() => setDisplay(!display)} className="pl-40 text-white pointer"><b>X</b></p>
            <p className="pl-6 text-white">Home</p>
            <p className="pl-6 text-white">Sign In</p>
            <p className="pl-6 text-white">Register</p>
          </div>)}

      </div>
    </>
  );
}