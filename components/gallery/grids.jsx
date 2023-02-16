import React from "react"
import Image from "next/image"

import photos from "./photos"

export const Grid1 = ({id1, id2, id3, id4}) => {
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-3 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[5].height}
          width={photos[id1].images[5].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id2].src}
          alt="image"
          height={photos[id2].images[4].height}
          width={photos[id2].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-1 row-span-1 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[4].height}
          width={photos[id3].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-1 row-span-1 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id4].src}
          alt="image"
          height={photos[id4].images[4].height}
          width={photos[id4].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid2 = ({id1, id2, id3, id4}) => {
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-3 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-1 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[5].height}
          width={photos[id1].images[5].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id2].src}
          alt="image"
          height={photos[id2].images[4].height}
          width={photos[id2].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-1 row-span-1 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[4].height}
          width={photos[id3].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-1 row-span-1 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id4].src}
          alt="image"
          height={photos[id4].images[4].height}
          width={photos[id4].images[4].width}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}
