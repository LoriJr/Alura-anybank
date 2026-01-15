export class Transacao {
  constructor(
    tipo: TipoTransacao,
    valor: number
  )
  {}
}

  export enum TipoTransacao{
    DEPOSITO = 'deposito',
    SAQUE = 'saque'
  }


