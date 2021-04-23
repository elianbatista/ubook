import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState,
  useEffect
} from "react";
import { Contato, ContatoModel } from "../models/contato";
import { AddContato } from "../services/AddContato";
import { DeleteContato } from "../services/DeleteContato";
import { ListContato } from "../services/ListContato";
import { UpdateContato } from "../services/UpdateContato";
import { PopUpContext } from "./PopUpContext";

interface ContatoContextData {
  contatos: ContatoModel[]
  updateId: string
  handleDeleteContato: (id: string) => void
  handleConfirmDelete: () => void
  handleUpdateContato: (id: string) => void
  handleConfirmUpdate: (contato: Contato) => void
  handleCriarContato: (contato: Contato) => void
  handleBuscar: (value: string) => void
}

interface ContatoProviderProps {
  children: ReactNode
}

export const ContatoContext = createContext({} as ContatoContextData)

export function ContatoProvider({ children }: ContatoProviderProps) {
  const { handlePopUpType } = useContext(PopUpContext)
  const [deleteId, setDeleteId] = useState('')
  const [updateId, setUpdateId] = useState('')
  const [contatos, setContatos] = useState([])

  const handleSetContatos = (contatos: ContatoModel[]) => {
    setContatos(contatos.sort((a, b) => {
      const an = a.nome.toUpperCase()
      const bn = b.nome.toUpperCase()
      return an < bn ? -1 : an > bn ? 1 : 0
    }))
  }
  
  const handleCriarContato = (contato: Contato) => {
    const body = AddContato(contato)
    handleSetContatos(body.contatos)
    handlePopUpType('')
    handleResetNew(body.newContatoId)
  }

  const handleResetNew = (id: string) => {
    const contatos = ListContato()
    contatos.map((contato) => {
      if (contato.id === id) {
        window.setTimeout(() => {
          const updateContato = UpdateContato(contato.id, Object.assign({}, contato, { new: false }))
          handleSetContatos(updateContato)
        }, 10000)
      }
    })
  }

  const handleDeleteContato = (id: string) => {
    setDeleteId(id)
    handlePopUpType('ExcluirContato')
  }

  const handleConfirmDelete = () => {
    const newContatos = DeleteContato(deleteId)
    handleSetContatos(newContatos)
    setDeleteId('')
    handlePopUpType('')
  }

  const handleBuscar = (value: string) => {
    const listContatos = ListContato()
    const search = listContatos.filter((contato) => {
      const resultado = contato.nome.toUpperCase().indexOf(value.toUpperCase())
      if (resultado >= 0) {
        return contato
      }
    })
    handleSetContatos(search)
  }

  const handleUpdateContato = (id: string) => {
    setUpdateId(id)
    handlePopUpType('EditarContato')
  }

  const handleConfirmUpdate = (contato: Contato) => {
    const newContatos = UpdateContato(updateId, contato)
    handleSetContatos(newContatos)
    setUpdateId('')
    handlePopUpType('')
  }

  useEffect(() => {
    const listContatos = ListContato()
    handleSetContatos(listContatos)
  }, [])

  return (
    <ContatoContext.Provider
      value={{
        contatos,
        updateId,
        handleDeleteContato,
        handleConfirmDelete,
        handleUpdateContato,
        handleConfirmUpdate,
        handleCriarContato,
        handleBuscar
      }}
    >
      { children }
    </ContatoContext.Provider>
  )
}