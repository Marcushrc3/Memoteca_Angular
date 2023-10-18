import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'testedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtestedddddddddddddddddddddddddddddddtesteddddddddddddddddddddddddddddddd',
      autoria: 'Marcus',
      modelo: 'modelo2'
    },
    {
      conteudo: 'terrtertrew',
      autoria: 'Marcus',
      modelo: 'modelo3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
