import { Category } from "../ category";
import styles from "./Card.module.scss"
import Image from "next/image";

interface Props {
  title: string
  description: string
  image: string
  category: 'economia' | 'educação' | 'diversidade' | 'default';
}

export function Card({ title, description, image, category = 'default' }: Props) {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" width={295} height={190} />
      <Category text={title} category={category} />
      <p>{description}</p>
    </div>
  )
}