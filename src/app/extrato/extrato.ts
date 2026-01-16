import { Component, input } from '@angular/core';
import { Transacao } from "./transacao/transacao";
import { TransacaoModel } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [Transacao],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css',
})
export class Extrato {
  transacoes = input.required<TransacaoModel[]>();

}
