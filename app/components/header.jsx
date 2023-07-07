import Link from "next/link";

export default function Header(){
  return (
    <div className="p-4">
      <nav className="flex w-full justify-end">
        <Link href="/">Report</Link>
        <p>/</p>
        <Link href="/statistics">Visualize</Link>
      </nav>
    </div>
  )
}