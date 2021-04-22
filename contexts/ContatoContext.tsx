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
import { PopUpContext } from "./PopUpContext";

interface ContatoContextData {
  contatos: ContatoModel[]
  handleDeleteContato: (id: string) => void
  handleConfirmDelete: () => void
  handleUpdateContato: (id: string) => void
  handleConfirmUpdate: (contato: ContatoModel) => void
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
  const [contatos, setContatos] = useState([])

  const handleSetContatos = (contatos: ContatoModel[]) => {
    setContatos(contatos.sort((a, b) => {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    }))
  }
  
  const handleCriarContato = (contato: Contato) => {
    const newContatos = AddContato(contato)
    handleSetContatos(newContatos)
    handlePopUpType('')
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

  }

  const handleConfirmUpdate = (contato: ContatoModel) => {
    
  }

  useEffect(() => {
    const listContatos = ListContato()
    handleSetContatos(listContatos)
  }, [])

  return (
    <ContatoContext.Provider
      value={{
        contatos,
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