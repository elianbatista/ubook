import React, { createContext, ReactNode, useState } from "react";

interface PopUpContextData {
  popUpType: string
  handlePopUpType: (type: string) => void
}

interface PopUpProviderProps {
  children: ReactNode
}

export const PopUpContext = createContext({} as PopUpContextData)

export function PopUpProvider({ children }: PopUpProviderProps) {
  const [popUpType, setPopUpType] = useState('')

  const handlePopUpType = (type: string) => {
    setPopUpType(type)
  }

  return (
    <PopUpContext.Provider
      value={{
        popUpType,
        handlePopUpType
      }}
    >
      { children }
    </PopUpContext.Provider>
  )
}