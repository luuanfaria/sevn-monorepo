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

export function Category({ category = 'default', text }: Props) {
  const categoryColor = categoryColors[category] || '#000'
  return <span style={{ color: categoryColor, fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}>{text}</span>
}