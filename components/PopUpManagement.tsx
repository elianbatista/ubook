import React, { useContext } from 'react'
import styles from '../styles/components/PopUpManagement.module.css'

import NovoContato from './NovoContato'
import ExcluirContato from './ExcluirContato'
import { PopUpContext } from '../contexts/PopUpContext'

const PopUpManagement = () => {
  const { popUpType, handlePopUpType } = useContext(PopUpContext)

  return (
    <div className={styles.container}>
      <div 
        className={styles.background}
        onClick={() => handlePopUpType('')}
        style={popUpType === '' ? {opacity: 0, visibility: 'hidden'} : {}}
      ></div>
      {
        popUpType === 'ExcluirContato' ? 
          <ExcluirContato /> :
        popUpType === 'NovoContato' ? 
          <NovoContato /> :
        ''
      }
    </div>
  )
}

export default PopUpManagement