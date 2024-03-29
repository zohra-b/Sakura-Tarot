import React from 'react'
import styles from './button.module.css'

export default function Button({text, isPrimary, action}) {
  return ( <button onClick={action} className={isPrimary ? styles.buttonPrimary : styles.buttonSecondary}>
  
    {text}
  </button>
  )
}
