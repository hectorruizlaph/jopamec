"use client"

import {createContext, useContext, useState} from "react"

const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {
  const [sliderImageindex, setSliderImageindex] = useState(-1)
  const [categoryContext, setCategoryContext] = useState("0")

  return (
    <GlobalContext.Provider
      value={{
        sliderImageindex,
        setSliderImageindex,
        categoryContext,
        setCategoryContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
