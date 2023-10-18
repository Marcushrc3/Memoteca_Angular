import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  // este decorator avisa para o angular que este obj está herdando do componente "pai"
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Marcus',
    modelo: 'modelo3'
}

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256)
    {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
