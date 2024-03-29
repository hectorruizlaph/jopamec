import {useGlobalContext} from "../context/store"
import Faq from "../components/faq"
import WhyUs from "../components/whyUs"

// import PhotoAlbum from "react-photo-album"
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
} from "../components/gallery/grids"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

// Swiper
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import {Autoplay, Navigation} from "swiper"

// Photos
import photos from "../components/gallery/photos"

export default function Gallery() {
  const {sliderImageindex, setSliderImageindex} = useGlobalContext()

  let idNum = 0
  return (
    <div className="pt-20 flex flex-col gap-16 sm:gap-16">
      <div className="ml-9">
        <h1
          className="text-[28px] font-bold leading-8 mb-8 text-center 
        sm:text-start sm:text-[32px] md:min-w-[550px]"
        >
          Productos de calidad entregados con orgullo
        </h1>
      </div>
      {/* <div className="flex justify-center items-center flex-wrap gap-4">
        <Grid1 id1={idNum} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        
        <Lightbox
          slides={photos}
          open={sliderImageindex >= 0}
          index={sliderImageindex}
          close={() => setSliderImageindex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div> */}
      <div className="w-full flex justify-center xl:w-[1040px] 3xl:w-[1548px]">
        <div
          className="flex justify-items-center items-center w-[350px] 
        sm:w-[400px] 
        md:w-[700px] 
        lg:w-[900px] 
        xl:w-[1032px]
        3xl:w-[1548px]"
        >
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
            breakpoints={{
              1150: {
                slidesPerView: 2,
              },
              1580: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="m-4">
                <Grid1 id1={idNum} id2={(idNum += 1)} id3={(idNum += 1)} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="m-4">
                <Grid2
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid2
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid3
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid4
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid5
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid6
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid1
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid2
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid3
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid4
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid5
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid6
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid1
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid2
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid3
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid4
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid5
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid6
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid1
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="m-4">
                <Grid2
                  id1={(idNum += 1)}
                  id2={(idNum += 1)}
                  id3={(idNum += 1)}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Lightbox
        slides={photos}
        open={sliderImageindex >= 0}
        index={sliderImageindex}
        close={() => setSliderImageindex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <WhyUs />

      <Faq />
    </div>
  )
}
