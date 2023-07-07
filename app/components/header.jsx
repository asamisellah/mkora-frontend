import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <div className="flex p-4">
      <div className="flex w-1/2">
        <Image
          src="/vercel.svg"
          alt="mkora-logo"
          width="100"
          height="100"
          className="mr-3"
        ></Image>
        
        <p className="text-sm">The anti-virus for corruption</p>
      </div>
      
      <nav className="flex w-1/2 justify-end">
        <Link href="/">Report</Link>
        <p>/</p>
        <Link href="/statistics">Visualize</Link>
      </nav>
    </div>
  )
}