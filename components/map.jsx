import React, {useState, useEffect} from "react"
// height = 200
// width = 0.3

let value = ""
if (typeof window !== "undefined") {
  value = window.innerWidth
}

const Map = ({height, width}) => {
  console.log(value)
  const [windowWidth, setWindowWidth] = useState(value)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(value)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  return (
    <div className="flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14381.771982783455!2d-100.3535984!3d25.6897528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629609627a0b5f%3A0xc4499d984ac189ab!2sPlacas%20JOPAMEC!5e0!3m2!1sen!2smx!4v1676336708802!5m2!1sen!2smx"
        width={windowWidth - width * windowWidth}
        height={height}
        style={{border: "0"}}
        allowFullscreen=""
        loading="lazy"
        className="rounded-lg shadow-lg "
      ></iframe>
    </div>
  )
}

export default Map
