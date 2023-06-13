import React from 'react'

export default function ArrowRight({ onClick }) {
    return (

        <button onClick={onClick}
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


    )
}
