import React from 'react'
import styles from '../styles/components/PopUpManagement.module.css'

import NovoContato from './NovoContato'
import ExcluirContato from './ExcluirContato'

const PopUpManagament = () => {
  return (
    <div className={styles.container}>
      <ExcluirContato />
    </div>
  )
}

export default PopUpManagament