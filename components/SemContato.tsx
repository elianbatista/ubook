import React, { useContext } from 'react'
import { PopUpContext } from '../contexts/PopUpContext'
import styles from '../styles/components/SemContato.module.css'

const SemContato = () => {
  const { handlePopUpType } = useContext(PopUpContext)

  const handleCriarContato = () => {
    handlePopUpType('NovoContato')
  }
  
  return (
    <div className={styles.container}>
      <img src="/img/icons/book.svg" />
      <p>
        Nenhum contato foi criado ainda.
      </p>
      <button 
        className={styles.button_criar_contato} 
        onClick={handleCriarContato}
      >
          <img src="/img/icons/plus.svg" />
          <span>
            Criar contato
          </span>
        </button>
    </div>
  )
}

export default SemContato