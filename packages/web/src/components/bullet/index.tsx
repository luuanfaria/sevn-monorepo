import styles from './Bullet.module.scss'

interface Props {
  category: 'economia' | 'educação' | 'diversidade' | 'default';
  title: string;
}

const categoryColors: Record<Props['category'], string> = {
  economia: '#ff2d2d',
  educação: '#24538b',
  diversidade: '#248b28',
  default: '#000',
};

export function Bullet({ category = 'default', title }: Props) {
  const categoryColor = categoryColors[category] || '#000'

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: categoryColor }}/>
      <p>{title}</p>
    </div>
  )
}