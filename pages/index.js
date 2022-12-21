import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}> 
    <Head>
      <title>samTech</title>
    </Head>
    <Link href='/about'> About</Link>
  <h1>hello</h1>
    </div>
  )
}
