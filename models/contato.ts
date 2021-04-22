export interface ContatoModel {
  id: string
  nome: string
  email: string
  telefone: string
  initial: string
}

export type Contato = Omit<ContatoModel, 'id' | 'initial'>