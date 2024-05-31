interface Props {
  category: 'economia' | 'educação' | 'diversidade' | 'default';
  text: string;
}

const categoryColors: Record<Props['category'], string> = {
  economia: '#ff2d2d',
  educação: '#24538b',
  diversidade: '#248b28',
  default: '#000',
};

export function Category({ category = 'default', text }: Props) {
  const categoryColor = categoryColors[category] || '#000'
  return <span style={{ color: categoryColor, fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}>{text}</span>
}