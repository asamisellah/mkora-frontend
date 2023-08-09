'use client'

import { createContext, useState } from "react"

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('swahili')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider