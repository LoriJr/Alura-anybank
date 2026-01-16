import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TipoTransacao, TransacaoModel } from '../../modelos/transacao';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transacao = input.required<TransacaoModel>();

  valor = computed(()=>{
    if(this.transacao().tipo === TipoTransacao.SAQUE){
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  })

}
