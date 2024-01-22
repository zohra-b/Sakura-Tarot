import React from 'react'
import styles from './button.module.css'

export default function Button({text, isPrimary}) {
  return ( <button className={isPrimary ? styles.buttonPrimary : styles.buttonSecondary}>
  
    {text}
  </button>
  )
}
