import React, { useContext, useState, useEffect } from 'react'
import { ContatoContext } from '../contexts/ContatoContext'
import { PopUpContext } from '../contexts/PopUpContext'
import styles from '../styles/components/Topo.module.css'

interface TopoProps {
  buttonAddContato: boolean
}

const Topo = ({ buttonAddContato }: TopoProps) => {
  const { handlePopUpType } = useContext(PopUpContext)
  const { handleBuscar } = useContext(ContatoContext)

  const [searchField, setSearchField] = useState('')

  const handlePopUpNovoContato = () => {
    handlePopUpType('NovoContato')
  }

  useEffect(() => {
    handleBuscar(searchField)
  }, [searchField])

  return (
    <header className={styles.header}>
      <img 
        src="/img/logo.svg" 
        alt="Logo uBook"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        {
          buttonAddContato ?
          <button 
            className={styles.button_criar_contato}
            onClick={handlePopUpNovoContato}
          >
            <img src="/img/icons/plus.svg" />
            <span>
              Criar contato
            </span>
          </button> : ''
        }
        <div className={styles.search}>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className={styles.field_search}
            value={searchField}
            onChange={(event) => setSearchField(event.target.value)}
          />
          <img src="/img/icons/search.svg" />
        </div>
      </nav>
    </header>
  )
}

export default Topo