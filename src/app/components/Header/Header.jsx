import React from "react";
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/img/logo_sakura.png" alt="" />
        </header>
    )
  }