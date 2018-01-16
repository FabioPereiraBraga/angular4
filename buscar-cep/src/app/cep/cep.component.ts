import { Component, OnInit } from '@angular/core';
import {CepService} from '../cep.service';
import { Cep } from '../cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep:Cep = new Cep();

  constructor(private cepService:CepService) { }

  ngOnInit() {
  }

buscar(){
  this.cepService.buscar(this.cep.cep)
  .then( (cep:Cep)=>this.cep = cep )
  .catch( () =>{
    let cep = this.cep.cep;
    this.cep = new Cep;
    this.cep.cep = cep;
    alert('Falha na busca pelo cep');
  })
}


}
