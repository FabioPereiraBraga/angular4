import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CepService {

  constructor(private http:Http) { }

  buscar(cep:string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    .toPromise()
    .then(response => {
      return response.json();
    });
  }

}
