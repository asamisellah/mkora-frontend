import Link from "next/link";

export default function Navigation() {
  
  return (
    <div className="flex p-4 justify-end nav">
      <Link href="/">
        Report
      </Link>

      <p className="mx-3">/</p>

      <Link href="/statistics">
        Visualize
      </Link>
    </div>
  )
}