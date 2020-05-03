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
import { FooterComponent } from "./footer/footer.component";
import { GraphQLModule } from "./graphql.module";
import { JokeComponent } from "./joke/joke.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "ng-cli-universal"}),
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    GraphQLModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, pathMatch: "full"},
    ]),
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [{provide: ApiService, useClass: ApiService}],
  bootstrap: [AppComponent],
  entryComponents: [JokeComponent]
})
export class AppModule {
}

export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}
