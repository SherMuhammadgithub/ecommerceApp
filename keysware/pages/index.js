

import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useDarkMode } from '@/pages/Darkmode';

export default function Home() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? 'bg-gray-700 , text-white' : 'bg-white , text-gray-600'}`}>
      <section className=" body-font mx-4 md:mx-12">
        <div className="container mx-auto flex px-5 py-16 md:py-44 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" style={{ clipPath: " polygon(50% 15%, 65% 0%, 100% 35%, 100% 65%, 55% 100%, 45% 100%, 0% 65%, 0% 35%, 35% 0%)" }}>
            <div className={styles.animation}>
              <img className=" object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/photo/2021/03/19/13/40/online-6107598_1280.png" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center text-center">
            <div className={styles.text}>

              <h1 className="title-font sm:text-4xl  text-3xl mb-4  font-bold text-purple-600">KEYSWARE: WEAR YOU WANT</h1>
            </div>
            <p className="mb-8 text-justify leading-relaxed italic " style={{ textAlignLast: "center" }}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa fugit iure excepturi unde nihil debitis? Fuga? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor exercitationem natus at consectetur? Doloribus nobis, voluptatum, nam quas fuga est porro unde odit commodi ab officiis perspiciatis modi hic sit!</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>


      <section className=" body-font mx-4 md:mx-12">
        <div className="container px-5 py-8 md:py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl  text-3xl mb-4  font-bold text-purple-600 capitalize">ORDER: ANYTHING YOU WANT</h1>
            <p className="lg:w-1/2 w-full leading-relaxed  italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo nam maiores possimus alias modi, vitae asperiores, officiis, amet qui ducimus magnam. Impedit modi iusto non? Aliquid tenetur libero explicabo.</p>
          </div>
          {/* <div className="flex flex-wrap -m-4"> */}
          {/* <Cards h2="Toys" />
            <Cards h2="Hoodies" />
            <Cards h2="Tshirts" />
            <Cards h2="Electronoics" />
            <Cards h2="Crocurrey" />
            <Cards h2="Fragmence" /> */}


          <section className="text-gray-600 body-font">
            <div className="container px-5 py-0 mx-auto flex flex-wrap">
              <div className="lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-purple-300 py-32 px-10 relative mb-4">
                  <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/811b+MhrCeL._AC_SX522_.jpg" />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Mugs for yours</h2>
                    <p className="leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, illum.</p>
                    <Link href={'/mugs'}> <div className="mt-3 text-purple-700 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </div></Link>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-purple-300 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/81x2DHW6l5L._AC_SX425_.jpg" />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Stickesr for kids</h2>
                        <p className="leading-relaxed hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas..</p>
                        <Link href={'/stickers'}><div className="mt-3 text-purple-700 inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </div> </Link>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-purple-300 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-top block opacity-25 absolute inset-0" src="https://m.media-amazon.com/images/I/51aZJyxZPaS._AC_UX522_.jpg" />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Tshirts for men</h2>
                        <p className="leading-relaxed hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ducimus.</p>
                        <Link href={'/tshirts'}>  <div className="mt-3 text-purple-700 inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </div> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




          {/* </div> */}

        </div>
      </section>
      {/* <img src="/filter.jpg" className='' alt="" /> */}

    </div>


  )
}
