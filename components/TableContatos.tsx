import React, { useContext } from 'react'
import { ContatoContext } from '../contexts/ContatoContext'
import { ContatoModel } from '../models/contato'
import styles from '../styles/components/TableContatos.module.css'

interface TableContatosProps {
  contatos: ContatoModel[]
}

const TableContatos = ({ contatos }: TableContatosProps) => {
  const { handleDeleteContato, handleUpdateContato } = useContext(ContatoContext)

  const cores = [
    '#fa8d68',
    '#90d26c',
    '#68a0fa',
    '#fab668',
    '#8368fa',
    '#fa68b5',
    '#5fe2c4',
    '#f55a5a'
  ]

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.header}>
            <th>

            </th>
            <th>
              Contatos
            </th>
            <th>
              E-mail
            </th>
            <th>
              Telefone
            </th>
            <th>

            </th>
            <th>

            </th>
          </tr>
          {
            contatos.map((contato, index) => {
              return (
                <tr key={contato.id} className={styles.row} style={contato.new ? { backgroundColor: '#fff3f2'} : {} }>
                  <td className={styles.initial}>
                    <span style={{backgroundColor: cores[index % cores.length]}}>
                      {contato.initial}
                    </span>
                  </td>
                  <td>
                    {contato.nome}
                  </td>
                  <td>
                    {contato.email}
                  </td>
                  <td>
                    {contato.telefone}
                  </td>
                  <td className={styles.icon}>
                    <img src="/img/icons/edit.svg" onClick={() => handleUpdateContato(contato.id)} />
                  </td>
                  <td className={styles.icon} onClick={() => handleDeleteContato(contato.id)}>
                    <img src="/img/icons/delete.svg" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableContatos