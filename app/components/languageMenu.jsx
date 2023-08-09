import { useContext } from "react";
import { languages } from "../constants";
import { LanguageContext } from "../providers/LanguageProvider";

export default function LanguageMenu() {
  const { language, setLanguage } = useContext(LanguageContext)
  
  return (
    <div className="text-secondary font-normal flex flex-row items-center justify-center">
      {languages.map((lang, index) => (
        <div className="flex" key={index+lang}>
          <button className={language.toLowerCase() == lang.toLowerCase() ? "text-primary": ""} onClick={()=>{setLanguage(lang.toLowerCase())}}>{lang}</button>
          {index != languages.length -1 && <div id="divider" className="mx-2">/</div>}
        </div>
      ))}
    </div>
  )
 }