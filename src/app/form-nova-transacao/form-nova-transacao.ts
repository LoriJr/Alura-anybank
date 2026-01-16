import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, TransacaoModel } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<TransacaoModel>();

  TipoTransacaoEnum = TipoTransacao;

  aoSubmeter(){
    const transacao = new TransacaoModel(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao ="";
  }

}
