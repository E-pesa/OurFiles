import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HelpComponent } from './component/help/help.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { LearnmoreComponent } from './component/learnmore/learnmore.component';
import { SignupComponent } from './component/signup/signup.component';
import {routing} from './app.routing';
import { AboutComponent } from './component/about/about.component';
import { TeamComponent } from './component/team/team.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelpComponent,
    DocumentationComponent,
    LearnmoreComponent,
    SignupComponent,
    AboutComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
