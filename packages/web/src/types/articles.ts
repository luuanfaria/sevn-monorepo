export interface Article {
  id: number;
  title: string;
  category: 'economia' | 'educação' | 'diversidade';
  description: string;
  image: string;
}

export interface SecondaryArticle {
  id: number;
  title: string;
  category: 'economia' | 'educação' | 'diversidade';
}

export interface FullArticle {
  id: number;
  category: 'economia' | 'educação' | 'diversidade';
  title: string;
  subTitle: string;
  publishedAt: string;
  content: string;
}
