import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerregistComponent } from './customerregist/customerregist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PricetableComponent } from './pricetable/pricetable.component';
import { ConsentComponent } from './consent/consent.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { ConsentResumeComponent } from './consent-resume/consent-resume.component';
import { JobsComponent } from './jobs/jobs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { Blog1Component } from './blogs/blog1/blog1.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { ContentComponent } from './blogs/content/content.component';

const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'price', component: PricetableComponent },
    { path: 'consent', component: ConsentComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'care', component: CustomerregistComponent },
    { path: 'job', component: JobsComponent },
    { path: 'consent-resume', component: ConsentResumeComponent },
    { path: 'blogs', component: BlogComponent },
    { path: 'blogs/5thing-to-prevent-bedridden', component: Blog1Component},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
