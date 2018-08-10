import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{

    var config = {
      apiKey: "AIzaSyDt0cxDjDke0gZX4Fp50eM5qYmrYBZOPPI",
      authDomain: "jta-fabrica-mobilus.firebaseapp.com",
      databaseURL: "https://jta-fabrica-mobilus.firebaseio.com",
      projectId: "jta-fabrica-mobilus",
      storageBucket: "jta-fabrica-mobilus.appspot.com",
      messagingSenderId: "663687852836"
    };

    firebase.initializeApp(config)
  }
}
