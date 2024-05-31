import { Category } from "@/components/ category";
import { Adversiting } from "../../components/adversiting";
import styles from './Noticia.module.scss';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  category: 'economia' | 'educação' | 'diversidade';
  title: string;
  subTitle: string;
  publishedAt: string;
  content: string;
}

export default function Noticia() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const response = await fetch(`https://localhost:3333/api/articles/${id}`)
        const data = await response.json()
        setArticle(data);
      }

      fetchArticle()
    }
  }, [id]);

  return (
    <section className={styles.container}>
      <main className={styles.content}>
        <div className={styles.header}>
          <Category text={article!.category} category={article!.category} />
          <h1 className={styles.title}>{article?.title}</h1>
          <p className={styles.description}>{article?.subTitle}</p>
          <p className={styles.publishedDate}>13/02/2022 as 16h30, Por: Redação</p>
        </div>

        <Adversiting />

        <p className={styles.text}>
          {article?.content}
        </p>
      </main>
    </section>
  )
}