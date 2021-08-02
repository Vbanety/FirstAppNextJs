import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolor debitis consequuntur neque eius. Officia magni provident minima, reiciendis et numquam, doloremque natus eius, voluptatum laborum quam architecto! Magni, inventore!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolor debitis consequuntur neque eius. Officia magni provident minima, reiciendis et numquam, doloremque natus eius, voluptatum laborum quam architecto! Magni, inventore!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        
      </div>
    </>
  )
}
