import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  listaTransacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.listaTransacoes().reduce((acc, transacaoAtual) => {
      return acc + transacaoAtual.valor;
    }, 0);
  });

  processarTransacao(transacao: Transacao){
    this.listaTransacoes.update(
      (listaAtual) => [transacao, ...listaAtual ])
  }
}
