import React, { useContext } from 'react'
import styles from '../styles/pages/Home.module.css'

import Topo from '../components/Topo'
import SemContato from '../components/SemContato'
import PopUpManagament from '../components/PopUpManagement'
import TableContatos from '../components/TableContatos'
import { ContatoContext } from '../contexts/ContatoContext'

export default function Home() {
  const { contatos } = useContext(ContatoContext)

  return (
    <div className={styles.container}>
      <PopUpManagament />
      <Topo buttonAddContato={contatos.length === 0 ? false : true} />
      {
        contatos.length === 0 ?
          <SemContato /> : <TableContatos contatos={contatos} />
      }
    </div>
  )
}
