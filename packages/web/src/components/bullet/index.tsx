import styles from './Bullet.module.scss'

interface Props {
  category: 'economy' | 'education' | 'diversity' | 'default';
  text: string;
}

const categoryColors: Record<Props['category'], string> = {
  economy: '#ff2d2d',
  education: '#24538b',
  diversity: '#248b28',
  default: '#000',
};

export function Bullet({ category = 'default', text }: Props) {
  const categoryColor = categoryColors[category] || '#000'

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: categoryColor }}/>
      <p>{text}</p>
    </div>
  )
}