import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PresenceAllComponent } from './presence/presence-all/presence-all.component';
import { PresenceAddComponent } from './presence/presence-add/presence-add.component';
import { PresenceUpdateComponent } from './presence/presence-update/presence-update.component';
import { ProjetAllComponent } from './projet/projet-all/projet-all.component';
import { ProjetAddComponent } from './projet/projet-add/projet-add.component';
import { ProjetUpdateComponent } from './projet/projet-update/projet-update.component';
import { TacheAllComponent } from './tache/tache-all/tache-all.component';
import { TacheAddComponent } from './tache/tache-add/tache-add.component';
import { TacheUpdateComponent } from './tache/tache-update/tache-update.component';
import { UserAllComponent } from './user/user-all/user-all.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { DocumentaionAllComponent } from './documentation/documentaion-all/documentaion-all.component';
import { DocumentaionAddComponent } from './documentation/documentaion-add/documentaion-add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,FooterComponent,SideBarComponent, NavBarComponent, HomeComponent, PresenceAllComponent, PresenceAddComponent, PresenceUpdateComponent, ProjetAllComponent, ProjetAddComponent, ProjetUpdateComponent, TacheAllComponent, TacheAddComponent, TacheUpdateComponent, UserAllComponent, UserAddComponent, UserUpdateComponent, DocumentaionAllComponent, DocumentaionAddComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
