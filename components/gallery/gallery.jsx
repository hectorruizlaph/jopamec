import {useState} from "react"
import Image from "next/image"
import PhotoAlbum from "react-photo-album"
import {Grid1, Grid2} from "./grids"

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
        {/* <div className="flex flex-wrap"> */}
        {/* <div className="grid grid-cols-4 grid-rows-4 gap-3">
          {photos?.map((photo) =>
            photo?.id <= 4 ? (
              <div
                key={photo?.id}
                className="relative rounded-xl w-[200px] h-[200px] fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
              >
                <Image
                  src={photo?.src}
                  alt="image"
                  height={photo?.images[5]?.height}
                  width={photo?.images[5]?.width}
                  className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
                />
              </div>
            ) : null
          )}
        </div> */}
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
