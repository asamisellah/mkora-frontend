'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/components/navbar.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { CloseRounded } from "@mui/icons-material";


export default function Navbar({ navLinks, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const currentPath = usePathname()
  const isActive = (link) => {
    return currentPath.startsWith(link.href)
  }

  const getMobileMenu = () => {
    return (
      <div className="mobile-nav flex flex-col gap-5"> 
        <button className="self-end px-5" onClick={() => setIsMenuOpen(false)}>
          <CloseRounded className="text-secondary" fontSize="large"></CloseRounded>
        </button> 
        {navLinks.map((link, index) => (
          <div className="mb-5" key={link.name}>
            <Link
              className={`text-4xl ml-4 p-4 text-secondary  ${isActive(link) ? "underline underline-offset-8 decoration-primary font-medium": "font-normal"}`}
              href={link.href}
              key={index+link.name}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start md:w-1/2">{children}</div>

        <div id="main-menu" className={`md:flex flex-row justify-end md:w-1/2`}>
          {navLinks.map(link => {
            return (
              <Link
                className={`text-4xl ml-4 p-4 text-secondary  ${isActive(link) ? "underline underline-offset-8 decoration-primary font-medium": "font-normal"}`}
                href={link.href}
                key={link.name}>
                {link.name}
              </Link>
            )
          })}
        </div>

        <div id='mobile-menu' className="w-1/8">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuRoundedIcon className="text-primary" fontSize="large"></MenuRoundedIcon>
          </button>
          {isMenuOpen && getMobileMenu()}
        </div>
      </nav> 
    </>
  )
}