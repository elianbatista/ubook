import React from 'react'
import styles from '../styles/components/Topo.module.css'

const Topo = () => {
  return (
    <header className={styles.header}>
      <img 
        src="/img/logo.svg" 
        alt="Logo uBook"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <button className={styles.button_criar_contato}>
          <img src="/img/icons/plus.svg" />
          <span>
            Criar contato
          </span>
        </button>
        <div className={styles.search}>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className={styles.field_search}
          />
          <img src="/img/icons/search.svg" />
        </div>
      </nav>
    </header>
  )
}

export default Topo