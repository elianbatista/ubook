import React from 'react'
import styles from '../styles/components/SemContato.module.css'

const SemContato = () => {
  return (
    <div className={styles.container}>
      <img src="/img/icons/book.svg" />
      <p>
        Nenhum contato foi criado ainda.
      </p>
      <button className={styles.button_criar_contato}>
          <img src="/img/icons/plus.svg" />
          <span>
            Criar contato
          </span>
        </button>
    </div>
  )
}

export default SemContato