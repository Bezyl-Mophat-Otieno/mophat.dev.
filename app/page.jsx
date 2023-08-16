import Image from 'next/image'
import styles from './page.module.css'

// fetch data from external API
export default async function Home() {
  return (
      <div className={styles.description}>
         <h1>This is the home page</h1>
      </div>
  )
}
