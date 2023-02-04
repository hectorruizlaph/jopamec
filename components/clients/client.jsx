import React, {useState} from "react"
import Image from "next/image"

const Client = ({path}) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  return (
    <div
      className="flex justify-center items-center max-h-[118px] min-h-[118px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering ? (
        <Image
          src={`/images/clients-color/${path}.svg`}
          alt="client"
          width={200}
          height={118}
          className="max-h-[118px] hover:fill-gold text-gold mx-auto my-auto self-center text-center items-center place-self-center"
        />
      ) : (
        <Image
          src={`/images/clients/${path}.svg`}
          alt="client"
          width={200}
          height={118}
          className="max-h-[118px] hover:fill-gold text-gold mx-auto my-auto"
        />
      )}
    </div>
  )
}

export default Client
