'use client'

import LanguageMenu from "../components/languageMenu"
import Navbar from "../components/navbar"
import { navLinks } from "../constants"
import styles from "../styles/report/styles.css"
import Brand from "../components/brand";
import Header from "../components/header";
import LanguageProvider from "../LanguageProvider";

const ReportLayout = ({ children }) => {

  return (
    <LanguageProvider>
      <div className="report">
        <nav className="nav-area">
          <Navbar navLinks={navLinks}>
            <LanguageMenu></LanguageMenu>
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
    </LanguageProvider>
  )
}
export default ReportLayout