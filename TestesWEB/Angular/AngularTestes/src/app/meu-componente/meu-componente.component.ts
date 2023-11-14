import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {
  tchauMundo = 'Tchau'
  alunos = [{
    nome: "Ricardo",
    idade: 27,
    trabalho: 'Segurança',
    salario: 1800
  },
  {
  nome: "Carlos",
  idade: 21,
  trabalho: 'Dev Web',
  salario: 5000
  },
  {
    nome: "Ana",
    idade: 19,
    trabalho: 'Dev Mobile',
    salario: 6700
  }
]

}
