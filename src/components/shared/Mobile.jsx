import { RxHamburgerMenu } from "react-icons/rx";

export default function Mobile() {
    return (
        <>
            <div className="flex md:hidden justify-between overflow-hidden">
                <div className="md:w-[400px] bg-mobile mx-auto w-full h-screen bg-cover bg-center sm:bg-cover sm:bg-no-repeat md:bg-cover md:bg-center">
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
                    <div className="flex flex-col justify-center my-48 items-center">
                        <h1 className="text-white pl-9 font-poppins pr-6 text-center text-3xl sm:text-4xl font-bold">
                            Live the emotion of the manga
                        </h1>
                        <h1 className="text-white text-xl font-poppins my-2 mb-4">
                            Find the perfect manga for you
                        </h1>
                        <button className="p-4 w-80 rounded-full font-roboto text-white text-lg bg-[#F472B6]">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
