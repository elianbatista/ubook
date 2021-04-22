import React, { 
  createContext, 
  ReactNode, 
  useContext, 
  useState,
  useEffect
} from "react";
import { ContatoModel } from "../models/contato";
import { DeleteContato } from "../services/DeleteContato";
import { ListContato } from "../services/ListContato";
import { PopUpContext } from "./PopUpContext";

interface ContatoContextData {
  contatos: ContatoModel[]
  handleDeleteContato: (id: string) => void
  handleConfirmDelete: () => void
  handleUpdateContato: (id: string) => void
  handleConfirmUpdate: (contato: ContatoModel) => void
}

interface ContatoProviderProps {
  children: ReactNode
}

export const ContatoContext = createContext({} as ContatoContextData)

export function ContatoProvider({ children }: ContatoProviderProps) {
  const { handlePopUpType } = useContext(PopUpContext)
  const [deleteId, setDeleteId] = useState('')
  const [contatos, setContatos] = useState([])

  const handleDeleteContato = (id: string) => {
    setDeleteId(id)
    handlePopUpType('ExcluirContato')
  }

  const handleConfirmDelete = () => {
    const newContatos = DeleteContato(deleteId)
    setContatos(newContatos)
    setDeleteId('')
    handlePopUpType('')
  }

  const handleUpdateContato = (id: string) => {

  }

  const handleConfirmUpdate = (contato: ContatoModel) => {
    
  }

  useEffect(() => {
    const listContatos = ListContato()
    setContatos(listContatos)
  }, [])

  return (
    <ContatoContext.Provider
      value={{
        contatos,
        handleDeleteContato,
        handleConfirmDelete,
        handleUpdateContato,
        handleConfirmUpdate
      }}
    >
      { children }
    </ContatoContext.Provider>
  )
}