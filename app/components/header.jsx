import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <div className="flex flex-wrap p-4">
        <Image
          src="/mkora.svg"
          alt="mkora-logo"
          width="100"
          height="100"
          className="mr-3"
      ></Image>
      
      <div className="ml-3">
        <h1 className="logo-header">M-Kora</h1>
        <h3>The anti-virus for corruption</h3>
      </div>
        
    </div>
  )
}