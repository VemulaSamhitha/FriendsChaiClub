import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { TeaComponent } from './menu/tea/tea.component';
import { CoffeeComponent } from './menu/coffee/coffee.component';
import { SnacksComponent } from './menu/snacks/snacks.component';
import { CookiesComponent } from './menu/cookies/cookies.component';
import { ChaioncallComponent } from './chaioncall/chaioncall.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    MenuComponent,
    TeaComponent,
    CoffeeComponent,
    SnacksComponent,
    CookiesComponent,
    ChaioncallComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
