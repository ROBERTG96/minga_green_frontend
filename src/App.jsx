import { useState } from "react";
import NavBar from "./components/shared/NavBar";
import Main from "./components/shared/Main";
import Footer from "./components/shared/Footer";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full bg-black"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden  rounded-lg md:h-96">
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <div className="hidden md:block  container mx-auto p-10 -mt-12">
              <nav className="flex justify-between items-center">
                <button className="mx-5 mb-4">
                  <RxHamburgerMenu className="h-10 w-10 bg-gradient-to-tr text-[#F472B6]"></RxHamburgerMenu>
                </button>
                <div className="my-5">
                  <img
                    src="/src/assets/img/NavBar/logo.svg"
                    className="md:block block"
                    alt=""
                  />
                </div>
              </nav>
              <div className="flex justify-between h-64 bg-home1 rounded bg-cover w-full">
                <div className="flex ">
                  <img
                    src="/src/assets/img/NavBar/personaje1.png"
                    className="pl-10 pr-20 -mt-7 md:pl-0 md:pr-0 lg:pl-10 lg:pr-20"
                  />
                  <img
                    src="/src/assets/img/NavBar/Image3.png"
                    className="-mt-9 mb-8"
                  />
                  <div className="flex p-24 items-center md:p-6 lg:p-24">
                    <h1 className="text-white my-2 text-sm font-medium ">
                      <h1 className="text-white text-xl my-4">Shonen</h1>
                      Is the manga that is aimed at adolescent boys. They are
                      series with large amounts of action, in which humorous
                      situations often occur. The camaraderie between members of
                      a collective or a combat team stands out.
                    </h1>
                  </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                  ></button>
                </div>
                <button
                  type="button"
                  className="flex top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
                <button
                  type="button"
                  className="flex items-center justify-between h-full px-4 cursor-pointer group focus:outline-none"
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

              <div className="h-[551px] rounded bg-desktop bg-cover w-full bg-center my-6 flex flex-col justify-center p-24">
                <div className="my-10">
                  <h1 className="text-white md:text-3xl lg:text-7xl font-bold">
                    Live the emotion of the manga
                  </h1>
                  <h1 className="text-white text-2xl my-2 font-thin">
                    Find the perfect manga for you
                  </h1>{" "}
                  <h1 className="text-white text-sm my-2 font-light">
                    #MingaForever &#128293;
                  </h1>
                  <button className="p-4 w-60 rounded-md text-white text-2xl font-extralight bg-[#F472B6]">
                    Explore
                  </button>
                </div>
                <Main></Main>
                <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block  container mx-auto p-10 -mt-12">
        <nav className="flex justify-between items-center">
          <button className="mx-5 mb-4">
            <RxHamburgerMenu className="h-10 w-10 bg-gradient-to-tr text-[#F472B6]"></RxHamburgerMenu>
          </button>
          <div className="my-5">
            <img
              src="/src/assets/img/NavBar/logo.svg"
              className="md:block block"
              alt=""
            />
          </div>
        </nav>
        <div className="flex justify-between h-64 bg-home1 rounded bg-cover w-full">
          <div className="flex ">
            <img
              src="/src/assets/img/NavBar/personaje1.png"
              className="pl-10 pr-20 -mt-7 md:pl-0 md:pr-0 lg:pl-10 lg:pr-20"
            />
            <img
              src="/src/assets/img/NavBar/Image3.png"
              className="-mt-9 mb-8"
            />
            <div className="flex p-24 items-center md:p-6 lg:p-24">
              <h1 className="text-white my-2 text-sm font-medium ">
                <h1 className="text-white text-xl my-4">Shonen</h1>
                Is the manga that is aimed at adolescent boys. They are series
                with large amounts of action, in which humorous situations often
                occur. The camaraderie between members of a collective or a
                combat team stands out.
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[551px] rounded bg-desktop bg-cover w-full bg-center my-6 flex flex-col justify-center p-24">
          <div className="my-10">
            <h1 className="text-white md:text-3xl lg:text-7xl font-bold">
              Live the emotion of the manga
            </h1>
            <h1 className="text-white text-2xl my-2 font-thin">
              Find the perfect manga for you
            </h1>{" "}
            <h1 className="text-white text-sm my-2 font-light">
              #MingaForever &#128293;
            </h1>
            <button className="p-4 w-60 rounded-md text-white text-2xl font-extralight bg-[#F472B6]">
              Explore
            </button>
          </div>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>

      <div className="flex md:hidden justify-between overflow-hidden bg-[#EBEBEB]">
        <div className="md:w-[400px] md:hidden mx-auto w-full h-screen bg-center bg-cover bg-mobile ">
          <nav className="flex justify-between items-center mx-3">
            <button className="mx-5 mb-4">
              <RxHamburgerMenu className="h-10 w-10 bg-gradient-to-tr text-[#F472B6]"></RxHamburgerMenu>
            </button>
            <div className="my-5">
              <img
                src="/src/assets/img/NavBar/logo.svg"
                className="w-2/3 my-5 md:block block"
                alt=""
              />
            </div>
          </nav>
          <div className="flex flex-col justify-start my-72 items-center">
            <h1 className="text-white justify-self-end my-2 text-xl font-bold">
              Live the emotion of the manga
            </h1>
            <h1 className="text-white text-xl my-4">
              Find the perfect manga for you
            </h1>
            <button className="p-4 w-96 rounded-full text-white text-lg font-medium bg-[#F472B6]">
              Explore
            </button>
          </div>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
