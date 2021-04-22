import React, { useContext } from 'react'
import { PopUpContext } from '../contexts/PopUpContext'
import styles from '../styles/components/Topo.module.css'

const Topo = () => {
  const { handlePopUpType } = useContext(PopUpContext)

  const handlePopUpNovoContato = () => {
    handlePopUpType('NovoContato')
  }

  return (
    <header className={styles.header}>
      <img 
        src="/img/logo.svg" 
        alt="Logo uBook"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <button 
          className={styles.button_criar_contato}
          onClick={handlePopUpNovoContato}
        >
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