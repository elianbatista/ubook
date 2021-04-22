import React, { useContext, useState, useEffect } from 'react'
import { PopUpContext } from '../contexts/PopUpContext'
import { AddContato } from '../services/AddContato'
import styles from '../styles/components/NovoContato.module.css'

const ExcluirContato = () => {
  const { handlePopUpType } = useContext(PopUpContext)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [activeButton, setActiveButton] = useState(false)

  const handleCancelar = () => {
    handlePopUpType('')
  }

  const handleSubmit = () => {
    const contato = AddContato({ nome, email, telefone })
    console.log(contato)
  }

  useEffect(() => {
    if((nome != '') || (email != '') || (telefone != '')) {
      setActiveButton(true)
    } else {
      setActiveButton(false)
    }
  }, [nome, email, telefone])

  return (
    <div className={styles.container}>
      <h1>
        Criar novo contato
      </h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nome</label>
          <input 
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input 
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>Telefone</label>
          <input 
            type="text"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </div>
      </form>
      <div className={styles.content_buttons}>
        <button onClick={handleCancelar}>
          Cancelar
        </button>
        <button onClick={handleSubmit} disabled={!activeButton}>
          Salvar
        </button>
      </div>
    </div>
  )
}

export default ExcluirContato