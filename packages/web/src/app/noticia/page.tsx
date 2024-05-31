import { Category } from "@/components/ category";
import { Adversiting } from "../../components/adversiting";
import styles from './Noticia.module.scss';

const text = `
Banco Central libera consulta a dinheiro esquecido em bancos O Banco Central informou nesta segunda-feira (14) que quem não tiver valores a receber nesta etapa das consultas ao novo site de consulta aos recursos 'esquecidos' nos bancos poderá eventualmente ter nas próximas fases do sistema. 

Muitos clientes que acessam o sistema têm recebido a mensagem para retornar a consulta em 2 de maio (veja na imagem mais abaixo). 

"Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases", informou o BC ao ser questionado pelo g1. 

Isso acontece porque, ao todo, os bancos têm R$ 8 bilhões a devolver aos clientes. Mas, nesta primeira fase, foram abertas consultas referentes à metade, R$ 4 bilhões. 

Banco Central libera consulta de dinheiro ‘esquecido’ em bancos: saiba como fazer. 

Em 2 de maio, as consultas a uma nova fase serão abertas. O BC não informou, no entanto, se todos os R$ 4 bilhões restantes serão liberados para consultas nesta segunda fase. Em janeiro, no entanto, o BC afirmou que todos os recursos seriam liberados 'ao longo de 2022'. 

Página do BC informa que cidadão sem valores a receber atualmente poderá fazer nova consulta a partir de maio.
`

export default function Noticia() {
  return (
    <section className={styles.container}>
      <main className={styles.content}>
        <div className={styles.header}>
          <Category text='Economia' category='economy' />
          <h1 className={styles.title}>Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC</h1>
          <p className={styles.description}>Nesta primeira fase do serviço são cerca de R$ 4 bilhões a serem devolvidos. Banco Central estima que os clientes tenham a receber cerca de R$ 8 bilhões.</p>
          <p className={styles.publishedDate}>13/02/2022 as 16h30, Por: Redação</p>
        </div>

        <Adversiting />

        <p className={styles.text}>
          {text}
        </p>
      </main>
    </section>
  )
}