import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'contact-us',component:ContactUsComponent},
  {path:'service',component:ServiceComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
