import Link from 'next/link'
import React from 'react'
import {Poppins, Mochiy_Pop_One} from 'next/font/google'
import styles from './Nav.module.css'
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
const Nav = () => {
  return (
    <nav className={styles.nav}>
        <div id='logo'>
            <Link href='/home' className={poppins.className}>MovieParty</Link>
        </div>
        <div>
        </div>
      </nav>
  )
}

export default Nav