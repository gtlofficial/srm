"use client";

import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li>
        <Link href={`/page-features`}>Services</Link>
      </li>
      <li>
        <Link href={`/page-about`}>About</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact</Link>
      </li>
      <li>
        <Link href={`/page-gallery`}>Gallery</Link>
      </li>
    </>
  );
}
