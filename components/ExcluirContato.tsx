import React, { useContext } from 'react'
import { PopUpContext } from '../contexts/PopupContext'
import styles from '../styles/components/ExcluirContato.module.css'

const NovoContato = () => {
  const { handleIsPopUpActive, handlePopUpType } = useContext(PopUpContext)

  const handleCancelar = () => {
    handleIsPopUpActive(false)
    handlePopUpType('')
  }
  
  return (
    <div className={styles.container}>
      <h1>
        Excluir Contato
      </h1>
      <p>
        Deseja realmente excluir o contato?
      </p>
      <div className={styles.content_buttons}>
        <button onClick={handleCancelar}>
          Cancelar
        </button>
        <button>
          Excluir
        </button>
      </div>
    </div>
  )
}

export default NovoContato