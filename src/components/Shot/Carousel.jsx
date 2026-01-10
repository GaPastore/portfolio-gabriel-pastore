import { useEffect } from 'react';

import carousel from '../../styles/components/Carousel.module.css'
import vignette from '../../styles/components/Vignette.module.css'
import plainHeader from '../../styles/components/PlainHeader.module.css'

import BgOne from '../../assets/misc/youtube.png'
import BgTwo from '../../assets/misc/college-dropout-watermark.png'
import BgThree from '../../assets/misc/fit-track.png'
import BgFour from '../../assets/misc/joshua-watermark.png'
import BgFive from '../../assets/misc/somos-algo.png'

function Carousel(){

    const urls = [
      {
        id: 1,
        content: BgOne
      },
      {
        id: 2,
        content: BgTwo
      },
      {
        id: 3,
        content: BgThree
      },
      {
        id: 4,
        content: BgFour
      },
      {
        id: 5,
        content: BgFive
      }
    ];

    return(
        <div>
            <div className={carousel.carousel}>
                <div className={plainHeader.headerText + " oswald-plus"}>SHOT</div>
                <div className={vignette.vignette}></div>
                <div className={carousel.carouselWrapper}>
            
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[1].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[2].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[3].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[4].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[1].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[2].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[3].content})`}}></div>
                      <div className={carousel.carouselImage} style={{backgroundImage: `url(${urls[4].content})`}}></div>

                </div>

            </div>
            
          </div>
    )
}

export default Carousel;