import Link from "next/link";

export default function SubNavigation() {
  
  return (
    <div className="flex p-4 justify-end nav">
      <Link href="/">
        English
      </Link>

      <p className="mx-3">/</p>

      <Link href="/statistics">
        Swahili
      </Link>
    </div>
  )
}