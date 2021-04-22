import React, { useContext } from 'react'
import { ContatoContext } from '../contexts/ContatoContext'
import { ContatoModel } from '../models/contato'
import styles from '../styles/components/TableContatos.module.css'

interface TableContatosProps {
  contatos: ContatoModel[]
}

const TableContatos = ({ contatos }: TableContatosProps) => {
  const { handleDeleteContato } = useContext(ContatoContext)

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
            contatos.map((contato) => {
              return (
                <tr key={contato.id} className={styles.row}>
                  <td className={styles.initial}>
                    <span>
                      E
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
                    <img src="/img/icons/edit.svg" />
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