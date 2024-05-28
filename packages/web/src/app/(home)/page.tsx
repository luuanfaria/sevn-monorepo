import { Adversiting } from '@/app/components/adversiting'
import styles from './Home.module.scss'
import { Bullet } from '../components/bullet'
import { Card } from '../components/card'

export default function Home() {
  return (
    <section className={styles.container}>
      <Adversiting />

      <main className={styles.content}>
        <div className={styles.principal}>
          <div className={styles.principalMain}>
            <span>Economia</span>
            <h1>Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC</h1>
          </div>

          <div className={styles.bulletsContainer}>
            <div className={styles.bulletsPrincipal}>
             <Bullet text="Quem não tiver valores a receber poderá ter nas próximas fases, diz BC" />
             <Bullet text="Quem não tiver valores a receber poderá ter nas próximas fases, diz BC" />
             <Bullet text="Quem não tiver valores a receber poderá ter nas próximas fases, diz BC" />
             <Bullet text="Quem não tiver valores a receber poderá ter nas próximas fases, diz BC" />
            </div>
          </div>
        </div>

        <div className={styles.secondary}>
          <div className={styles.secondaryContainer}>
            <Card 
              title="Educação" 
              description='Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização' 
              image="https://s3-alpha-sig.figma.com/img/4860/b62c/5f89d5f732924bb3a0b37dccc69459e2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbfGRo6P6xPQ6HElaJgxR426OpWQTj~2N-e9mbLC9DFpuaWd~9Xg7LRE8GD76xfB3kx7M0VUl9j82emMFPy8KmUYebFZol6sEA1PCm1KXuwb658X7sXisn3EzzbSr-CGLydwlQNBOHpcmYxbW2tgdO7yAVKGD27zccJrjSxqeLYRdyl2OEcyK5EX119w8I0N~RqnKRBIYWcbvo5VrldhHj31FucwTGruKJq0xklhWZcBqcWGXYMU2aE9No2PymwRzOKD8DaQ2UgdqKrxN0cMhm~eknmfcSwT2cChnc~eY9iI00~AmA4Tr9y~h7SQx9rjJuFscyIu4eW234NwmqdTeg__" 
            />

            <Bullet text="Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização" />
            <Bullet text="Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização" />
          </div>

          <div className={styles.secondaryContainer}>
            <Card 
              title="Diversidade" 
              description='Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje' 
              image="https://s3-alpha-sig.figma.com/img/21a6/9033/8c49079302a6944094664e80d3160112?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T3R7-kgCHUslEEQ5KCmdTiKC6RqJ1bkrrLHnYFW7wf7JF3Aubnhm98IZYbKNOMijVXGCaDnoTmmCDZIiiNvBCtcNDZRBq30yjwbEimbbQTjwjvV9biOfn9hLnry9M3kJXOvKhZVqDlNgA8rPZNWbWeO0M1I3gqoFKxLjoq0zuq1Vt0dM-sM2wL6CBnoPzaBbutUW3fn3GjB46V2-oksib-3HspPGAHaThvhmeoG89kzVsyqnwrFnaxF8XIg6K5FzC9DvGm43MH6RveawVrLztyKuAI~W7XN3lUjJwzEtnucQERHRc0v8S2Uba7x4c0CaF3lZGC67iKq4QKaCoSeA3g__" 
            />

            <Bullet text="Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje" />
            <Bullet text="Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje" />
          </div>
        </div>
      </main>
    </section>
  )
}