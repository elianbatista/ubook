import React from 'react'
import styles from '../styles/components/NovoContato.module.css'

const ExcluirContato = () => {
  return (
    <div className={styles.container}>
      <h1>
        Criar novo contato
      </h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nome</label>
          <input type="text"/>
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input type="text"/>
        </div>
        <div className={styles.field}>
          <label>Telefone</label>
          <input type="text"/>
        </div>
      </form>
      <div className={styles.content_buttons}>
        <button>
          Cancelar
        </button>
        <button>
          Salvar
        </button>
      </div>
    </div>
  )
}

export default ExcluirContato