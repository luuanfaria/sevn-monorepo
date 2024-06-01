'use client'
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { Category } from "@/components/ category"
import { Adversiting } from "../../components/adversiting"

import { fetchArticleById } from "../api/articles"

import { FullArticle } from "@/types/articles"

import styles from '@/styles/Article.module.scss';

export default function Article() {
  const path = usePathname()
  const id = path[1]
  const [article, setArticle] = useState<FullArticle | null>(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const data = await fetchArticleById(id)
        setArticle(data);
      }

      fetchArticle()
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.container}>
      <main className={styles.content}>
        <div className={styles.header}>
          <Category text={article.category} category={article.category} />
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.description}>{article.subTitle}</p>
          <p className={styles.publishedDate}>13/02/2022 as 16h30, Por: Redação</p>
        </div>

        <Adversiting />

        <p className={styles.text}>
          {article.content}
        </p>
      </main>
    </section>
  );
}
