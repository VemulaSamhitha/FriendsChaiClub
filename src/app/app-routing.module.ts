import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChaioncallComponent } from './chaioncall/chaioncall.component';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './menu/coffee/coffee.component';
import { CookiesComponent } from './menu/cookies/cookies.component';
import { MenuComponent } from './menu/menu.component';
import { SnacksComponent } from './menu/snacks/snacks.component';
import { TeaComponent } from './menu/tea/tea.component';
import { MenulistComponent } from './menulist/menulist.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'menulist', component:MenulistComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'tea',component:TeaComponent},
    {path:'coffee',component:CoffeeComponent},
    {path:'snacks',component:SnacksComponent},
    {path:'cookies',component:CookiesComponent},
    
    
  ]},
    {path:'chaioncall', component:ChaioncallComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component:SigninComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},

];




  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
