import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

// informa que está classe é injetável, ou seja, poderá ser utilizada em outros lugares através de injeção de dependência.
@Injectable({
  providedIn: 'root' //significa que este serviço está visivel para toda a aplicação
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)

  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

}
