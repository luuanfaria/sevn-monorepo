'use client'

import { ArrowLeft } from 'lucide-react'
import styles from './Navbar.module.scss'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={`${styles.backButton} ${pathname === "/" ? styles.disabled : ''}`}>
        <ArrowLeft width={24} height={24} onClick={() => router.push('/')} />
      </div>
      <h1 className={styles.title}>SEVN NEWS</h1>
    </div>
  )
}