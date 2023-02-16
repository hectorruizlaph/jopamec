import {useState} from "react"
import Image from "next/image"
import PhotoAlbum from "react-photo-album"
import {Grid1, Grid2, Grid3, Grid4, Grid5, Grid6} from "./grids"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import photos from "./photos"

const GalleryComponent = () => {
  const [index, setIndex] = useState(-1)

  console.log(photos[0].src)

  return (
    <div className="pt-20">
      <div className="flex flex-wrap gap-3">
        <Grid1 id1={0} id2={1} id3={2} id4={3} />
        <Grid2 id1={4} id2={5} id3={6} id4={7} />
        <Grid3 id1={8} id2={9} id3={10} id4={11} />
        <Grid4 id1={12} id2={13} id3={14} id4={15} />
        <Grid5 id1={16} id2={17} id3={18} id4={19} />
        <Grid6 id1={20} id2={21} id3={22} id4={23} />
      </div>
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
    </div>
  )
}

export default GalleryComponent
