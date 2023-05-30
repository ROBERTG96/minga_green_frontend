import Mobile from "./Mobile"
export default function Carousel({ character_photo, cover_photo, title, description }) {
    return (
        <>
            <div id="default-carousel" className="w-full hidden md:block mb-20" data-carousel="slide">
                <div className="rounded-lg">
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <div className="hidden bg-[#EBEBEB] md:block pb-2 px-14 -mt-12">
                            <div className="flex justify-between h-64 bg-home1 rounded bg-cover w-full">
                                <button
                                    type="button"
                                    className="md:hidden lg:block xl:p-10 top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev
                                >
                                    <span className="">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_bd_12938_998)">
                                                <rect width="26.5" height="26.5" rx="13.25" transform="matrix(-1 0 0 1 30.5 3)" fill="url(#paint0_linear_12938_998)" fill-opacity="0.5" shape-rendering="crispEdges" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.25 16.25C22.25 16.0015 22.0465 15.8 21.7955 15.8L13.8019 15.8L17.1169 12.5182C17.2944 12.3425 17.2944 12.0575 17.1169 11.8818C16.9394 11.7061 16.6516 11.7061 16.474 11.8818L12.3831 15.9318C12.2056 16.1075 12.2056 16.3925 12.3831 16.5682L16.474 20.6182C16.6516 20.7939 16.9394 20.7939 17.1169 20.6182C17.2944 20.4425 17.2944 20.1575 17.1169 19.9818L13.8019 16.7L21.7955 16.7C22.0465 16.7 22.25 16.4985 22.25 16.25Z" fill="#333333" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_bd_12938_998" x="-28" y="-29" width="90.5" height="90.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_12938_998" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="1" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                    <feBlend mode="normal" in2="effect1_backgroundBlur_12938_998" result="effect2_dropShadow_12938_998" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12938_998" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_12938_998" x1="-2" y1="18.5" x2="67.5" y2="47.5" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" />
                                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
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
                                    className="md:hidden lg:block xl:p-10 top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev
                                >
                                    <span className="">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_bd_12928_9)">
                                                <rect x="4" y="3" width="26.5" height="26.5" rx="13.25" fill="url(#paint0_linear_12928_9)" fill-opacity="0.5" shape-rendering="crispEdges" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 16.25C12.25 16.0015 12.4535 15.8 12.7045 15.8L20.6981 15.8L17.3831 12.5182C17.2056 12.3425 17.2056 12.0575 17.3831 11.8818C17.5606 11.7061 17.8484 11.7061 18.026 11.8818L22.1169 15.9318C22.2944 16.1075 22.2944 16.3925 22.1169 16.5682L18.026 20.6182C17.8484 20.7939 17.5606 20.7939 17.3831 20.6182C17.2056 20.4425 17.2056 20.1575 17.3831 19.9818L20.6981 16.7L12.7045 16.7C12.4535 16.7 12.25 16.4985 12.25 16.25Z" fill="#333333" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_bd_12928_9" x="-28" y="-29" width="90.5" height="90.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
                                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_12928_9" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="1" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                    <feBlend mode="normal" in2="effect1_backgroundBlur_12928_9" result="effect2_dropShadow_12928_9" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_12928_9" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_12928_9" x1="2" y1="21.5" x2="71.5" y2="50.5" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" />
                                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <span className="sr-only">Previous</span>
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
                </div>
            </div>

            <Mobile></Mobile>
        </>
    )
}
