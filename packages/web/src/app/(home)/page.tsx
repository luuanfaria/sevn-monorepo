'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bullet } from '../../components/bullet'
import { Card } from '../../components/card'
import { Adversiting } from '@/components/adversiting'
import { Category } from '@/components/ category'
import styles from './Home.module.scss'
import { api } from '@/data/api'

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
      const response = await api('/main-articles');
      const data = await response.json();
      setMainArticles(data);
    };

    const fetchSecondaryArticles = async () => {
      const response = await api('/secondary-articles');
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
              <h1>
                <Link href={`/${article.id}`}>
                  {article.title}
                </Link>
              </h1>
            </div>
          ))}

          <div className={styles.bulletsContainer}>
            <div className={styles.bulletsPrincipal}>
             {secondaryArticles.slice(0, 4).map((article) => (
              <Link key={article.id} href={`/${article.id}`}>
               <Bullet title={article.title} category={article.category} />
              </Link>
             ))}
            </div>
          </div>
        </div>

        <div className={styles.secondary}>
          {mainArticles.slice(1, 3).map((article) => (
            <div key={article.id} className={styles.secondaryContainer}>
              <Link key={article.id} href={`/${article.id}`}>
                <Card 
                  title={article.title}
                  image={article.image}
                  category={article.category} 
                />
              </Link>

              {secondaryArticles.filter((secArticle) => secArticle.category === article.category).slice(0, 2).map((secArticle) => (
                <Link key={secArticle.id} href={`/${article.id}`}>
                  <Bullet  title={secArticle.title} category={secArticle.category} />
                </Link>
              ))}           
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}