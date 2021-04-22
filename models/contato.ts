export interface ContatoModel {
  id: string
  nome: string
  email: string
  telefone: string
}

export type Contato = Omit<ContatoModel, 'id'>