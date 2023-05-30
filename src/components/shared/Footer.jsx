import { RiFacebookBoxFill, RiTwitterFill, RiVimeoFill, RiYoutubeFill, RiHeartLine } from "react-icons/ri";

export default function Footer() {
  return (

    <div className=''>
      <div className='h-[500px] relative hidden bg-footer w-full 
      bg-cover bg-center md:bg-contain md:block md:-my-52 md:-mb-28 lg:block md:bg-no-repeat lg:-my-40 xl:bg-contain xl:-my-28 2xl:-my-28 '
      >
      </div>
      <div className=''>
        <nav className='container mx-auto font-poppins sm:mt-5 md:my-0 lg:mt-20 xl:mt-10 2xl:mt-36 '>
          <ul>
            <div className='flex items-center justify-center mx-auto'>
              <li className='mx-10 text-white hidden md:block md:text-black md:mx-20'>
                <a href="#">Home</a>
              </li>
              <li className='text-white hidden md:block md:text-black mx-auto'>
                <a href="#">Mangas</a>
              </li>
              <div className='hidden md:mx-auto md:block  '></div>
              <li className='hidden md:mx-auto md:block '>
                <a href="#" className='hidden md:block '>
                  <img
                    src="/src/assets/img/NavBar/logo.svg"
                    className=""
                    alt=""
                  />
                </a>
              </li>
              <div className='mx-auto hidden md:block'></div>
              <div className='flex mx-auto justify-between my-10  '>
                <li className='pr-8 '>
                  <a href="https://es-la.facebook.com/" target='_blank'><RiFacebookBoxFill className='text-[] text-3xl'></RiFacebookBoxFill></a>
                  <div className=''>
                    <button className='bg-[#F9A8D4] mt-5 p-2 w-52 rounded-full mb-4 md:block absolute text-white text-xl'>
                      Donate ♡
                    </button>
                  </div>
                </li>
                <li className='pr-8'>
                  <a href="https://twitter.com/" target='_blank'><RiTwitterFill className='text-black text-3xl'></RiTwitterFill></a>
                </li>
                <li className='pr-7'>
                  <a href="https://vimeo.com/?utm_medium=cpc&utm_source=google&utm_campaign=Core_Search_INTL_ES_Google_Brand&utm_term=vimeo&utm_adgroup=Vimeo+-+Exact&campaignid=19614554638&adgroupid=149233244567&device=c&gclid=EAIaIQobChMIt5_e_KaS_wIVVkFIAB0S0AFsEAAYASAAEgJbA_D_BwE&gclsrc=aw.ds" target='_blank'><RiVimeoFill className='text-black text-3xl'></RiVimeoFill></a>
                </li>
                <li >
                  <a href="https://www.youtube.com/" target='_blank'><RiYoutubeFill className='text-black text-3xl'></RiYoutubeFill></a>
                </li>
              </div>
            </div>

          </ul>

        </nav>

      </div>

    </div>
  )
}
