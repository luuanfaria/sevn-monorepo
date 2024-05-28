import { Adversiting } from '@/app/components/adversiting'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <Adversiting />
    </main>
  )
}