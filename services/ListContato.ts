import { ContatoModel } from "../models/contato"

export const ListContato = (): ContatoModel[] => {
  const contatos: ContatoModel[] = JSON.parse(localStorage.getItem('@ubook/contato'))
  if (contatos) {
    return contatos
  } else {
    return []
  }
} 