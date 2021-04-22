import React from 'react'
import styles from '../styles/pages/Home.module.css'

import Topo from '../components/Topo'
import SemContato from '../components/SemContato'
import PopUpManagament from '../components/PopupManagement'

export default function Home() {
  return (
    <div className={styles.container}>
      <PopUpManagament />
      <Topo />
      <SemContato />
    </div>
  )
}
