import React, { useContext, useState, useEffect } from 'react'
import { ContatoContext } from '../contexts/ContatoContext'
import { PopUpContext } from '../contexts/PopUpContext'
import styles from '../styles/components/NovoContato.module.css'
import MaskedInput from 'react-text-mask'
import { FindContato } from '../services/FindContato'

const EditarContato = () => {
  const { handlePopUpType } = useContext(PopUpContext)
  const { handleConfirmUpdate, updateId } = useContext(ContatoContext)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [activeButton, setActiveButton] = useState(false)

  const handleCancelar = () => {
    handlePopUpType('')
  }

  const handleSubmit = () => {
    handleConfirmUpdate({
      nome,
      email,
      telefone
    })
  }

  useEffect(() => {
    const contato = FindContato(updateId)
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
  }, [])

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
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>Telefone</label>
          <MaskedInput 
            type="text"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            mask={
              (event) => {
                let value = event.replace('(', '').replace(')', '').replace(' ', '').replace('-', '').replace(/_/g, '')
                if (value.length > 10) {
                  return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
                } else {
                  return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
                }
              }
            }
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

export default EditarContato