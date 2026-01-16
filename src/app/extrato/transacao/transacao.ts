import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TransacaoModel } from '../../modelos/transacao';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class Transacao {
  transacao = input.required<TransacaoModel>();

  dataTransacao = new Date();

}
