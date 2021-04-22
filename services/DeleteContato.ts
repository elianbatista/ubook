import { ContatoModel } from "../models/contato"
import { ListContato } from "./ListContato"

export const DeleteContato = (id: string): ContatoModel[] => {
  const contatos = ListContato()
  let indexDelete
  contatos.forEach((value, index) => {
    if(value.id === id) {
      indexDelete = index
    }
  })
  contatos.splice(indexDelete, 1)
  localStorage.setItem('@ubook/contato', JSON.stringify(contatos))
  return contatos
}