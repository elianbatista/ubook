import React, { useContext } from 'react'
import { ContatoContext } from '../contexts/ContatoContext'
import { PopUpContext } from '../contexts/PopUpContext'
import styles from '../styles/components/ExcluirContato.module.css'

const NovoContato = () => {
  const { handleConfirmDelete } = useContext(ContatoContext)
  const { handlePopUpType } = useContext(PopUpContext)

  const handleCancelar = () => {
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
        <button onClick={handleConfirmDelete}>
          Excluir
        </button>
      </div>
    </div>
  )
}

export default NovoContato