import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthenticationService} from './services/authentication.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAonFcMaYtjKtPrTHpYIH7lEXKOYR_Y6Aw",
    authDomain: "authapp-bdf4f.firebaseapp.com",
    databaseURL: "https://authapp-bdf4f.firebaseio.com",
    projectId: "authapp-bdf4f",
    storageBucket: "authapp-bdf4f.appspot.com",
    messagingSenderId: "397377714819"
  };
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
