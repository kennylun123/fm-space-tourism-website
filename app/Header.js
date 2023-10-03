"use client";
import Image from "next/image";
import Link from "next/link";

import { barlow_Condensed } from "./fonts";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className={`${styles.topNavigation} flex`}>
      <div className={styles.topNavigationWrap}>
        <Link href="/" aria-label="Space Tourism Homepage">
          <Image
            src="/assets/shared/logo.svg"
            alt="Space Tourism Website Logo"
            className={styles.logo}
            width={48}
            height={48}
            priority
          />
        </Link>
        <button
          className={`${styles.hamburger} 
          ${menuActive ? styles.hamburgerActive : ""}`}
          aria-label="Open main menu"
          onClick={handleHamburgerClick}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <nav
        className={`${styles.topNavigationMain} ${
          menuActive ? styles.topNavigationMainActive : ""
        }`}
        aria-label="Main menu"
      >
        <ul
          className={`${styles.mainMenu} ${barlow_Condensed.className} flex fs300 textNeutral100 ls2-7 uppercase`}
          role="list"
        >
          <li className={styles.mainMenuLinkContainer}>
            <Link href="/" className={`${styles.mainMenuLink} flex`}>
              <span className={`${styles.linkIndex} fw700`}>00&nbsp;</span>Home
            </Link>
          </li>
          <li className={styles.mainMenuLinkContainer}>
            <Link href="/destination" className={`${styles.mainMenuLink} flex`}>
              <span className={`${styles.linkIndex} fw700`}>01&nbsp;</span>
              Destination
            </Link>
          </li>
          <li className={styles.mainMenuLinkContainer}>
            <Link href="/crew" className={`${styles.mainMenuLink} flex`}>
              <span className={`${styles.linkIndex} fw700`}>02&nbsp;</span>Crew
            </Link>
          </li>
          <li className={styles.mainMenuLinkContainer}>
            <Link href="/technology" className={`${styles.mainMenuLink} flex`}>
              <span className={`${styles.linkIndex} fw700`}>03&nbsp;</span>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
