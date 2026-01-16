export class TransacaoModel {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly  valor: number
  )
  {}
}

  export enum TipoTransacao{
    DEPOSITO = 'Depósito',
    SAQUE = 'Saque'
  }
