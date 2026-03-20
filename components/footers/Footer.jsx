"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer bg-secondary  pb-4 lg:pb-6 dark:bg-black dark:text-white">
        <div className="uc-footer-content pt-6 lg:pt-8">
          <div className="container max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p className="opacity-60">
                  SRM © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2 text-gray-300">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit Smart Route Motors on ${link.label}`}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
