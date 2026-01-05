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
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-4">
                    <div className="panel vstack items-start gap-3 xl:gap-4 ltr:md:pe-8 rtl:md:ps-8">
                      <div>
                        <Link href={`/`} style={{ width: 140 }}>
                          <Image
                            className="text-primary"
                            alt="SRM"
                            src="/assets/images/branding/logo-light.png"
                            width="117"
                            height="40"
                          />
                        </Link>
                        <p className="mt-2">
                          Design amazing digital experiences that create more
                          happy in the world.
                        </p>
                      </div>
                    </div>
                  </div>
                  {footerLinks.map((section, index) => (
                    <div key={index} className={section.extraClass || ""}>
                      <ul className="nav-y gap-2 fw-medium">
                        {section.links.map((link, idx) => (
                          <li key={idx}>
                            <Link
                              href={link.href}
                              className={
                                idx === 0
                                  ? "fs-7 dark:text-gray-300"
                                  : undefined
                              }
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p className="opacity-60">
                  SRM © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2 text-gray-300">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank">
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
