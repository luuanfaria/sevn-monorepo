import styles from "./Card.module.scss"
import Image from "next/image";

interface Props {
  title: string
  description: string
  image: string
}

export function Card({ title, description, image }: Props) {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" width={295} height={190} />
      <span>{title}</span>
      <p>{description}</p>
    </div>
  )
}