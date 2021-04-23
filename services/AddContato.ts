import { Contato, ContatoModel } from "../models/contato";
import * as uuid from 'uuid'

interface AddContatoReturn {
  newContatoId: string
  contatos: ContatoModel[]
}

export const AddContato = (contato: Contato): AddContatoReturn => {
  let contatos: ContatoModel[] = JSON.parse(localStorage.getItem('@ubook/contato'))
  if (!contatos) {
    contatos = []
  }
  const initial = contato.nome.substr(0, 1)
  const id = uuid.v1()
  const contato_model = Object.assign({}, contato, { id, initial: initial.toUpperCase(), new: true })
  contatos.push(contato_model)
  localStorage.setItem('@ubook/contato', JSON.stringify(contatos))
  return {
    newContatoId: id,
    contatos
  }
}