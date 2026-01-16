export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly  valor: Number
  )
  {}
}

  export enum TipoTransacao{
    DEPOSITO = 'deposito',
    SAQUE = 'saque'
  }
