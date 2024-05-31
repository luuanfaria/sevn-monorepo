'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bullet } from '../../components/bullet'
import { Card } from '../../components/card'
import { Adversiting } from '@/components/adversiting'
import { Category } from '@/components/ category'
import styles from './Home.module.scss'

interface Article {
  id: number;
  title: string;
  category: 'economia' | 'educação' | 'diversidade';
  description: string;
  image: string;
}

interface SecondaryArticle {
  id: number;
  title: string;
  category: 'economia' | 'educação' | 'diversidade';
}

export default function Home() {
  const [mainArticles, setMainArticles] = useState<Article[]>([])
  const [secondaryArticles, setSecondaryArticles] = useState<SecondaryArticle[]>([])

  useEffect(() => {
    const fetchMainArticles = async () => {
      const response = await fetch('http://localhost:3333/api/main-articles');
      const data = await response.json();
      setMainArticles(data);
    };

    const fetchSecondaryArticles = async () => {
      const response = await fetch('http://localhost:3333/api/secondary-articles');
      const data = await response.json();
      setSecondaryArticles(data);
    };

    fetchMainArticles();
    fetchSecondaryArticles();
  }, [])

  return (
    <section className={styles.container}>
      <Adversiting />

      <main className={styles.content}>
        <div className={styles.principal}>
          {mainArticles.slice(0, 1).map((article) => (
            <div key={article.id} className={styles.principalMain}>
              <Category text={article.category} category={article.category} />
              <h1><Link href={`/noticia/${article.id}`}>{article.title}</Link></h1>
            </div>
          ))}

          <div className={styles.bulletsContainer}>
            <div className={styles.bulletsPrincipal}>
             {secondaryArticles.slice(0, 4).map((article) => (
               <Bullet key={article.id} title={article.title} category={article.category} />
             ))}
            </div>
          </div>
        </div>

        <div className={styles.secondary}>
          {mainArticles.slice(1, 3).map((article) => (
            <div key={article.id} className={styles.secondaryContainer}>
              <Card 
                title={article.category} 
                description={article.description} 
                image={article.image}
                category={article.category} 
              />

              {secondaryArticles.filter((secArticle) => secArticle.category === article.category).slice(0, 2).map((secArticle) => (
                <Bullet key={secArticle.id} title={secArticle.title} category={secArticle.category} />
              ))}           
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}