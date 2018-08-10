import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

//import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-resetsenha',
  templateUrl: './resetsenha.component.html',
  styleUrls: ['./resetsenha.component.css']
})
export class ResetsenhaComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
  })

  constructor(
    //private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

}
