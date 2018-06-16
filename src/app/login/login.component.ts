import { Component, OnInit, HostBinding } from '@angular/core';


import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }
  login(){
    this.authService.login()
    .then((data) => {
      console.log(data);
      alert('Login Realizado com Sucesso');
    })
    .catch((erro) => {
      console.log(erro);
      alert('Erro ao realizar o login');
    });
  }

 



  ngOnInit() {
  }

}
