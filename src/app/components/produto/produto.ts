import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  nome = 'Notebook';
  preco = 3499.99;
  mostrarPreco = true;

  produtos = [
    { nome: 'Monitor', preco: 1500 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Teclado', preco: 250 },
  ];
}
