import styles from './Bullet.module.scss'

interface Props {
  text: string
}

export function Bullet({ text }: Props) {
  return (
    <div className={styles.container}>
      <div />
      <p>{text}</p>
    </div>
  )
}