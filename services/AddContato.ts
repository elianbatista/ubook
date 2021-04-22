import { Contato, ContatoModel } from "../models/contato";
import * as uuid from 'uuid'

export const AddContato = (contato: Contato): ContatoModel => {
  let contatos: ContatoModel[] = JSON.parse(localStorage.getItem('@ubook/contato'))
  if (!contatos) {
    contatos = []
  }
  const contato_model = Object.assign({}, contato, { id: uuid.v1() })
  contatos.push(contato_model)
  localStorage.setItem('@ubook/contato', JSON.stringify(contatos))
  return contato_model
}