import { useContext } from "react";
import { content } from "../constants";
import { LanguageContext } from "../providers/LanguageProvider";

export default function Header() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="text-lightgray text-center flex flex-col items-center">
      <h2 className="font-normal text-2xl text-lightgray">{ content.header }</h2>
      <p className="tracking-wide text-1xl font-light mt-5">{ content.tagLine[language] }</p>
    </div>
  )
}