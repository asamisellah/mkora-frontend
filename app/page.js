'use client'

import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  if (usePathname() == "/") {
    useRouter().push("/report")
  }
  return (
    <>
    </>
  )
}
