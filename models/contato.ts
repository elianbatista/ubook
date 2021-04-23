export interface ContatoModel {
  id: string
  nome: string
  email: string
  telefone: string
  initial: string
  new: boolean
}

export type Contato = Omit<ContatoModel, 'id' | 'initial'>