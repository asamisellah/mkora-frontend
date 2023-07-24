import { languages } from "../constants";

export default function LanguageMenu({ language, setLanguage }) {
  return (
    <div className="text-secondary font-normal flex flex-row items-center justify-center">
      {languages.map((lang, index) => (
        <>
          <button key={index} className={language == lang && "text-primary"} onClick={()=>{setLanguage(lang)}}>{lang}</button>
          <div className="mx-2">/</div>
        </>
      ))}
    </div>
  )

 }