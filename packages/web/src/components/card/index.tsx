import { Category } from "../ category";
import styles from "./Card.module.scss"
import Image from "next/image";

interface Props {
  title: string
  image: string
  category: 'economia' | 'educação' | 'diversidade' | 'default';
}

export function Card({ title, image, category = 'default' }: Props) {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" width={295} height={190} />
      <Category text={category} category={category} />
      <p>{title}</p>
    </div>
  )
}