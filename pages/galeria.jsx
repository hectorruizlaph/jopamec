// import PhotoAlbum from "react-photo-album"
import {data} from "../data/data"

// type Obj = {
//   src?: string
//   width?: number
//   height?: number
// }
const photos = data.gallery.map((image) => {
  const obj = {}
  obj.src = `/images/gallery/${image.src}`
  obj.width = 800
  obj.height = 800
  return obj
})

// const Gallery = () => {
//   console.log(photos)
//   return (
//     <>
//       <PhotoAlbum layout="rows" photos={photos} />
//     </>
//   )
// }

// export default Gallery

// import PhotoAlbum from "react-photo-album";
// import NextJsImage from "../components/nextGallery";

// const Gallery = () => <PhotoAlbum layout="columns" photos={photos} renderPhoto={NextJsImage} />;

// export default Gallery

import {Swiper, SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"

// import required modules
import {Grid, Pagination} from "swiper"
import Image from "next/image"

export default function Gallery() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {data.gallery.map((image) => {
          return (
            <SwiperSlide key={image.src}>
              <Image
                src={`/images/gallery/${image.src}`}
                alt="img"
                height={500}
                width={500}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
