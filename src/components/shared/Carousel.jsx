import { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Mobile from "./Mobile"

export default function Carouselx() {

    //let counter = 0;
    const [counter, modify] = useState(0);

    const next = () => {
        modify(counter + 1);
        console.log(counter);
    }

    const prev = () => {
        modify(counter - 1);
        console.log(counter);
    }

    return (
        <>
            <div id="default-carousel" className="w-full hidden md:block mb-20" data-carousel="slide">
                <div className="rounded-lg">
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <div className="hidden bg-[#EBEBEB] md:block pb-2 px-14 -mt-12">

                            <div className="flex justify-between h-64 bg-home1 rounded bg-cover w-full">
                                <ArrowLeft onClick={prev} />

                                <div className="flex">

                                    <img
                                        src="/src/assets/img/NavBar/personaje1.png"
                                        className="-mt-7 md:pl-0 md:pr-0 lg:-mx-8 lg:pr-28 lg:pl-10 xl:pl-28 xl:pr-44 xl:-mx-18"
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
                                <ArrowRight onClick={next} />

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
