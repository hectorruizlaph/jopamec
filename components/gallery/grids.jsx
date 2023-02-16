import React from "react"
import Image from "next/image"
import {useGlobalContext} from "../../context/store"
import photos from "./photos"

export const Grid1 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-4 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id2].src}
          alt="image"
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid2 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
              transition duration-300
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
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
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-4 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid3 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-4 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
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
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid4 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 row-span-4 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
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
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid5 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
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
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-4 row-span-2 fill-current shadow-md
            transition duration-300  
            hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}

export const Grid6 = ({id1, id2, id3}) => {
  const {setSliderImageindex} = useGlobalContext()

  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-4 h-[350px] w-full
    sm:h-[400px]
    md:h-[500px] md:w-[500px]"
    >
      <div
        className="relative rounded-xl col-span-2 row-span-4 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id1].src}
          alt="image"
          height={photos[id1].images[2].height}
          width={photos[id1].images[2].width}
          onClick={() => setSliderImageindex(id1)}
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
          height={photos[id2].images[2].height}
          width={photos[id2].images[2].width}
          onClick={() => setSliderImageindex(id2)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
      <div
        className="relative rounded-xl col-span-2 row-span-2 fill-current shadow-md
              transition duration-300  
              hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      >
        <Image
          src={photos[id3].src}
          alt="image"
          height={photos[id3].images[2].height}
          width={photos[id3].images[2].width}
          onClick={() => setSliderImageindex(id3)}
          className="rounded-xl object-cover object-center min-w-full min-h-full h-full"
        />
      </div>
    </div>
  )
}
