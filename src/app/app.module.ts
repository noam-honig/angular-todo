import { NgModule, NgZone } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TodoComponent } from './todo/todo.component'
import { AuthComponent } from './auth/auth.component'
import { remult } from 'remult'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(zone: NgZone, http: HttpClient) {
    remult.apiClient.httpClient = http
    remult.apiClient.wrapMessageHandling = (handler) =>
      zone.run(() => handler())
  }
}
