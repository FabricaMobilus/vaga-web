import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
//import { Usuario } from '../usuario.model'
import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })
  
  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  //public exibirPainelLogin(): void {
   // this.exibirPainel.emit('login')
 // }

  public exibirPainelResetSenha():void {
    this.exibirPainel.emit('resetsenha')
  }
  public exibirPainelCadastro():void {
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void {
   this.autenticacao.autenticar(
     this.formulario.value.email,
     this.formulario.value.senha
   )
  
  }

}
