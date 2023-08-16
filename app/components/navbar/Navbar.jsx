import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { auth , UserButton} from '@clerk/nextjs'
function Navbar() {

  const {userId} = auth()
  return (
    <div className={styles.navBar}>
    <h4 className={styles.brand}>Mophat.dev</h4>
    <div className={styles.navLinks}>
     <div>
     <Link className={styles.link}  href="/">Home</Link>
     </div>

     {
       !userId && (
        <>
     <div>
    <Link className={styles.link} href="/sign-in">Sign In</Link>
     </div>
     <div>
    <Link  className={styles.link}  href="/sign-up">Sign Up</Link>
     </div>

        </>
       )
     }
     <div>
    { userId && <Link  className={styles.link}  href="/profile">My-Profile</Link>}
     </div>
     <UserButton afterSignOutUrl='/'/>
    </div>   
    </div>
  )
}

export default Navbar
