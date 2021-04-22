import React from 'react'
import styles from '../styles/pages/Home.module.css'

import Topo from '../components/Topo'
import SemContato from '../components/SemContato'

export default function Home() {
  return (
    <div className={styles.container}>
      <Topo />
      <SemContato />
    </div>
  )
}
