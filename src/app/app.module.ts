//core components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Third-party components
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2CompleterModule } from "ng2-completer";

//Owns components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SgPersonComponent } from './components/sg-person/sg-person.component';
import { SgTalksComponent } from './components/sg-talks/sg-talks.component';
import { MysuggestionsComponent } from './components/mysuggestions/mysuggestions.component';
import { AuthGuard } from './guard/auth.guard';
import { TalksthemesComponent } from './components/talksthemes/talksthemes.component';

//Services
import { AuthService } from './services/auth.service';
import { SugerenceService } from './services/sugerence.service';
import { ThemeService } from './services/theme.service';
import { ProfileComponent } from './components/profile/profile.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Inicio' }, canActivate: [AuthGuard] },
  { path: 'suggestions/person', component: SgPersonComponent, canActivate: [AuthGuard] },
  {
    path: 'suggestions/talks', component: SgTalksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suggestions/talks/code/:categoria', component: TalksthemesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'mysuggestions', component: MysuggestionsComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SgPersonComponent,
    SgTalksComponent,
    MysuggestionsComponent,
    TalksthemesComponent,
    ProfileComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [AuthService, SugerenceService, ThemeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
