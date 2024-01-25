import React from "react";
import styles from './header.module.css'
import Link from "next/link";


export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <img src="/img/logo_sakura.png" alt="" />
            </Link>     
        </header>
    )
  }