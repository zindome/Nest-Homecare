import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShareButtonsModule } from '@ngx-share/buttons';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MarkdownModule } from 'ngx-markdown';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricetableComponent } from './pricetable/pricetable.component';
import { ConsentComponent } from './consent/consent.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ConsentResumeComponent } from './consent-resume/consent-resume.component';
import { JobsComponent } from './jobs/jobs.component';
import { CustomerregistComponent } from './customerregist/customerregist.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { ContentComponent } from './blogs/content/content.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PricetableComponent,
    ConsentComponent,
    PaymentComponent,
    ContactComponent,
    FooterComponent,
    ConsentResumeComponent,
    JobsComponent,
    CustomerregistComponent,
    BlogComponent,
    Blog1Component,
    BlogsComponent,
    ContentComponent,


      ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ShareButtonsModule.withConfig({debug: true}),
    HttpClientModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    MarkdownModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
