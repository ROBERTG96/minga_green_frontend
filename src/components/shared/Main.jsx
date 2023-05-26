import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Main = () => {
  return (
    <div  >
      <div
        id="default-carousel"
        className="w-full hidden md:block mb-20"
        data-carousel="slide"
      >
        <div className="rounded-lg md:h-96 ">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <div className="hidden bg-[#EBEBEB] md:block p-14 -mt-12">
              <NavBar></NavBar>
              <div className="flex justify-between h-64 bg-home1 rounded bg-cover w-full">
                <button
                  type="button"
                  className="md:hidden lg:block xl:p-10 top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <div className="flex">
                  <img
                    src="/src/assets/img/NavBar/personaje1.png"
                    className="pl-10 pr-20 -mt-7 md:pl-0 md:pr-0 lg:-mx-24 lg:pr-36 lg:pl-10 xl:pl-1 xl:pr-44 xl:-mx-24"
                  />
                  <img
                    src="/src/assets/img/NavBar/Image3.png"
                    className="-mt-9 mb-8 lg:pr-44"
                  />
                  <div className="flex p-24 items-center md:p-5 md:text-xs md:items-start lg:-mx-32 lg:p-7 lg:pr-32 2xl:-mx-32">
                    <h1 className="text-white font-roboto my-2 xl:w-[90%] xl:pl-16 xl:pt-4 xl:leading-tight 2xl:pl-44">
                      <h1 className="text-white text-xl my-4 lg:text-2xl font-montserrat">Shonen</h1>
                      Is the manga that is aimed at adolescent boys. They are
                      series with large amounts of action, in which humorous
                      situations often occur. The camaraderie between members of
                      a collective or a combat team stands out.
                    </h1>
                  </div>
                </div>

                <button
                  type="button"
                  className="md:hidden lg:block xl:p-10 flex items-center justify-between h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
              <div className="hidden md:block mt-12">
                <div className="h-[551px] rounded bg-desktop bg-cover w-full bg-center my-6 flex flex-col justify-center p-24">
                  <div className="my-10">
                    <h1 className="text-white font-montserrat md:text-3xl md:flex md:mt-32 lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                      Live the emotion of the manga
                    </h1>
                    <h1 className="text-white font-montserrat text-2xl my-2 font-thin">
                      Find the perfect manga for you
                    </h1>
                    <h1 className="text-white font-montserrat text-sm my-2 font-light">
                      #MingaForever &#128293;
                    </h1>
                    <button className="p-4 w-60 rounded-md text-white font-montserrat text-2xl font-extralight bg-[#F472B6]">
                      Sign In!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>

        </div>
      </div>

      <div className="flex md:hidden justify-between overflow-hidden ">
        <div className="md:w-[400px] md:hidden bg-mobile mx-auto w-full h-screen bg-center bg-cover">
          <NavBar></NavBar>
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
          <Footer></Footer>

        </div>

      </div>

    </div>
  );
};

export default Main;
