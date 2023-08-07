'use client'

import LanguageMenu from "../components/languageMenu"
import Navbar from "../components/navbar"
import { navLinks } from "../constants"
import { useState } from "react";
import styles from "../styles/report/styles.css"
import Brand from "../components/brand";
import Header from "../components/header";

const ReportLayout = ({ children }) => {
  const [language, setLanguage] = useState(process.env.DEFAULT_LANGUAGE || 'Swahili')

  return (
    <div className="report">
      <nav className="nav-area">
        <Navbar navLinks={navLinks}>
          <LanguageMenu
            language={ language }
            setLanguage={setLanguage }>
          </LanguageMenu>
        </Navbar>
      </nav>

      <article className="header">
        <Brand direction="col"></Brand>
        <div className="my-11"></div>
        <Header></Header>
      </article>

      <article className="main">
        
        { children }
      </article>
    </div>
  )
}
export default ReportLayout