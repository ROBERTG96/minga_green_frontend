import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  return (
    <>
      <div className="bg-[#EBEBEB] hidden md:block ">
        <nav className="flex justify-between items-center sm:justify-between md:pb-8 sm:px-10 md:px-12">
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
      </div>
    </>
  );
}