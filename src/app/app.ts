import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { TipoTransacao, TransacaoModel } from './modelos/transacao';
import { Extrato } from "./extrato/extrato";

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao, Extrato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  listaTransacoes = signal<TransacaoModel[]>([]);

  saldo = computed(() => {
    return this.listaTransacoes().reduce((acc, transacaoAtual) => {

      if(transacaoAtual.tipo === TipoTransacao.DEPOSITO){
      return acc + transacaoAtual.valor;
      }else{
        return acc - transacaoAtual.valor;
      }
    }, 0);
  });

  processarTransacao(transacao: TransacaoModel){
    if(transacao.tipo===TipoTransacao.SAQUE && transacao.valor > this.saldo()){
      return alert("Saldo inuficiente!");
      }
    this.listaTransacoes.update((listaAtual) => [transacao, ...listaAtual ])
  }
}
