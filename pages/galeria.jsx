import GalleryComponent from "../components/gallery/gallery"

import {useState} from "react"
import Image from "next/image"
import PhotoAlbum from "react-photo-album"
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

import photos from "../components/gallery/photos"

export default function Gallery() {
  console.log(photos)

  // const [index, setIndex] = useState(-1)

  console.log(photos[0].src)
  let idNum = 0

  return (
    <div className="pt-20">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {/* 1 seccion de 18 */}
        <Grid1 id1={idNum} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        {/* 32 */}
        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        {/* 64 */}
        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid4 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid5 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid6 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />

        <Grid1 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid2 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
        <Grid3 id1={(idNum += 1)} id2={(idNum += 1)} id3={(idNum += 1)} />
      </div>
      {/* <div>
        <PhotoAlbum
          photos={photos}
          layout="columns"
          targetRowHeight={150}
          onClick={({index}) => setIndex(index)}
          className="rounded-xl"
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div> */}
    </div>
  )
}
