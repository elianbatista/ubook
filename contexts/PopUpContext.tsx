import React, { createContext, ReactNode, useState } from "react";

interface PopUpContextData {
  isPopUpActive: boolean
  handleIsPopUpActive: (active: boolean) => void
  popUpType: string
  handlePopUpType: (type: string) => void
}

interface PopUpProviderProps {
  children: ReactNode
}

export const PopUpContext = createContext({} as PopUpContextData)

export function PopUpProvider({ children }: PopUpProviderProps) {
  const [isPopUpActive, setIsPopUpActive] = useState(false)
  const [popUpType, setPopUpType] = useState('')

  const handleIsPopUpActive = (active: boolean) => {
    setIsPopUpActive(active)
  }

  const handlePopUpType = (type: string) => {
    setPopUpType(type)
  }

  return (
    <PopUpContext.Provider
      value={{
        isPopUpActive,
        handleIsPopUpActive,
        popUpType,
        handlePopUpType
      }}
    >
      { children }
    </PopUpContext.Provider>
  )
}