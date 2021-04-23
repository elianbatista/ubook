import { ContatoModel } from "../models/contato"
import { ListContato } from "./ListContato"

export const FindContato = (id: string): ContatoModel => {
  const contatos = ListContato()
  let indexFind
  contatos.forEach((value, index) => {
    if (value.id === id) {
      indexFind = index
    }
  })
  return contatos[indexFind]
}