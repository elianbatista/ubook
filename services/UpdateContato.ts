import { Contato, ContatoModel } from "../models/contato";
import { ListContato } from "./ListContato";

export const UpdateContato = (id: string, contato: Contato): ContatoModel[] => {
  const contatos = ListContato()
  const newArray: ContatoModel[] = contatos.map((value) => {
    if (value.id === id) {
      const initial = contato.nome.substr(0, 1)
      const new_contato = Object.assign({}, value, { 
        nome: contato.nome, 
        email: contato.email,
        telefone: contato.telefone,
        new: contato.new,
        initial: initial
      })
      return new_contato
    }
    return value
  })
  localStorage.setItem('@ubook/contato', JSON.stringify(newArray))
  return newArray
}