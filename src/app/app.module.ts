import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhatWeDoBannerComponent } from './components/what-we-do-banner/what-we-do-banner.component';
import { MissionBannerComponent } from './components/mission-banner/mission-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EncouragerBannerComponent } from './components/encourager-banner/encourager-banner.component';
import { AboutMeBannerComponent } from './components/about-me-banner/about-me-banner.component';
import { WhoAmIBannerComponent } from './components/who-am-i-banner/who-am-i-banner.component';
import { AmIRightForYouComponent } from './components/am-i-right-for-you/am-i-right-for-you.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { ContactBodyComponent } from './components/contact-body/contact-body.component';
import { PersonalTrainingComponent } from './components/personal-training/personal-training.component';
import { PersonalTrainingBannerComponent } from './components/personal-training-banner/personal-training-banner.component';
import { PersonalTrainingBodyComponent } from './components/personal-training-body/personal-training-body.component';
import { QuestionsAnsweredComponent } from './components/questions-answered/questions-answered.component';
import { OnlineTrainingComponent } from './components/online-training/online-training.component';
import { OnlineTrainingBannerComponent } from './components/online-training-banner/online-training-banner.component';
import { OnlineTrainingBodyComponent } from './components/online-training-body/online-training-body.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingBodyComponent } from './components/pricing-body/pricing-body.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PricingBannerComponent } from './components/pricing-banner/pricing-banner.component';
import { LoginComponent } from './components/login/login.component';
import { LoginBodyComponent } from './components/login-body/login-body.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminPanelHomeComponent } from './components/admin-panel-home/admin-panel-home.component';
import { AdminPanelSidebarComponent } from './components/admin-panel-sidebar/admin-panel-sidebar.component';
import { AdminPanelVideoComponent } from './components/admin-panel-video/admin-panel-video.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminPanelVideoAddVideoModalComponent } from './components/admin-panel-video-add-video-modal/admin-panel-video-add-video-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPanelNavbarComponent } from './components/user-panel-navbar/user-panel-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WhatWeDoBannerComponent,
    MissionBannerComponent,
    FooterComponent,
    AboutMeComponent,
    EncouragerBannerComponent,
    AboutMeBannerComponent,
    WhoAmIBannerComponent,
    AmIRightForYouComponent,
    ContactComponent,
    ContactBannerComponent,
    ContactBodyComponent,
    PersonalTrainingComponent,
    PersonalTrainingBannerComponent,
    PersonalTrainingBodyComponent,
    QuestionsAnsweredComponent,
    OnlineTrainingComponent,
    OnlineTrainingBannerComponent,
    OnlineTrainingBodyComponent,
    PricingComponent,
    PricingBodyComponent,
    HomeBannerComponent,
    PricingBannerComponent,
    LoginComponent,
    LoginBodyComponent,
    UserPanelComponent,
    AdminPanelComponent,
    AdminPanelHomeComponent,
    AdminPanelSidebarComponent,
    AdminPanelVideoComponent,
    AdminPanelVideoAddVideoModalComponent,
    UserPanelNavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
