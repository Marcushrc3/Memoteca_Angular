import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// informa que está classe é injetável, ou seja, poderá ser utilizada em outros lugares através de injeção de dependência.
@Injectable({
  providedIn: 'root' //significa que este serviço está visivel para toda a aplicação
})
export class PensamentoService {

  constructor(private http: HttpClient) { }
}
