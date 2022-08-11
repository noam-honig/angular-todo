import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'remult';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  signInUsername = '';
  currentUser?: UserInfo;
  signIn() {

  }
  signOut() {

  }


  ngOnInit(): void {
  }

}
