import React from 'react'
import styles from '../styles/components/PopUpManagement.module.css'

import NovoContato from './NovoContato'

const PopUpManagament = () => {
  return (
    <div className={styles.container}>
      <NovoContato />
    </div>
  )
}

export default PopUpManagament