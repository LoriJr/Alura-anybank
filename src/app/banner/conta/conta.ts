import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conta',
  imports: [CurrencyPipe, MatButtonModule, MatIconModule],
  templateUrl: './conta.html',
  styleUrl: './conta.css',
})
export class Conta {

  saldoVisivel: boolean = false;
  saldo = input.required<number>();

  saldoVisibilidade(): void{
    this.saldoVisivel = !this.saldoVisivel;
  }

}
