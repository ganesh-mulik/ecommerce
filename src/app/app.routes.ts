import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {"path":"",redirectTo:"",pathMatch:"full"},
    {"path":"",component:HomeComponent},
    {"path":"my-profile",component:UserProfileComponent},
    {"path":"contact-us",component:ContactUsComponent},
];
