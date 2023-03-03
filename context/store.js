"use client"

import {createContext, useContext, useState} from "react"

const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const [sliderImageindex, setSliderImageindex] = useState(-1)
  const [categoryContext, setCategoryContext] = useState("0")
  const [contactText, setContactText] = useState("")

  return (
    <GlobalContext.Provider
      value={{
        sliderImageindex,
        setSliderImageindex,
        categoryContext,
        setCategoryContext,
        contactText,
        setContactText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
