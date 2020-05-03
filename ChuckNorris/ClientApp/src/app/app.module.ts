import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {HomeComponent} from "./home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {ApiService} from "./services/app-services/api.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "ng-cli-universal"}),
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, pathMatch: "full"},
    ]),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [{provide: ApiService, useClass: ApiService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}
