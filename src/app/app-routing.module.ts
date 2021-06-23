import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OnlineTrainingComponent } from './components/online-training/online-training.component';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalTrainingComponent } from './components/personal-training/personal-training.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutme",component:AboutMeComponent},
  {path:"contact",component:ContactComponent},
  {path:"personaltraining",component:PersonalTrainingComponent},
  {path:"onlinetraining",component:OnlineTrainingComponent},
  {path:"pricing",component:PricingComponent},
  {path:"login",component:LoginComponent},
  {path:"panel",component:PanelComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
