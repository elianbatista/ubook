import React, { useContext } from 'react'
import styles from '../styles/components/PopUpManagement.module.css'

import NovoContato from './NovoContato'
import ExcluirContato from './ExcluirContato'
import { PopUpContext } from '../contexts/PopupContext'

const PopUpManagement = () => {
  const { isPopUpActive, popUpType } = useContext(PopUpContext)

  return (
    <div className={styles.container} style={!isPopUpActive ? {opacity: 0, visibility: 'hidden'} : {}}>
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