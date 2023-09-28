import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { remult, UserInfo } from 'remult'
import { retry, timer } from 'rxjs'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  constructor(private http: HttpClient) {}
  signInUsername = ''
  remult = remult
  showSignIn = false

  signIn() {
    this.http
      .post<UserInfo>('/api/signIn', {
        username: this.signInUsername,
      })
      .subscribe({
        next: (user) => {
          this.remult.user = user
          this.signInUsername = ''
          this.showSignIn = false
        },
        error: (error) => alert(error.error),
      })
  }

  signOut() {
    this.http
      .post('/api/signOut', {})
      .subscribe(() => (this.remult.user = undefined))
    this.showSignIn = true
  }

  ngOnInit() {
    this.http
      .get<UserInfo>('/api/currentUser')
      .pipe(retry({ count: 5, delay: () => timer(250) }))
      .subscribe((user) => (this.remult.user = user))
  }
}
