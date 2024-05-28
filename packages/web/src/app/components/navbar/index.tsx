'use client'

import { ArrowLeft } from 'lucide-react'
import styles from './Navbar.module.scss'
import { useState } from 'react'

export function Navbar() {
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <div className={styles.container}>
      <div className={`${styles.backButton} ${isDisabled ? styles.disabled : ''}`}>
        <ArrowLeft width={24} height={24} />
      </div>
      <h1 className={styles.title}>SEVN NEWS</h1>
    </div>
  )
}