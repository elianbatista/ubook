import React from 'react'
import styles from '../styles/components/ExcluirContato.module.css'

const NovoContato = () => {
  return (
    <div className={styles.container}>
      <h1>
        Excluir Contato
      </h1>
      <p>
        Deseja realmente excluir o contato?
      </p>
      <div className={styles.content_buttons}>
        <button>
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