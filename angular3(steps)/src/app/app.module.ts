import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { BComponent } from './home/b/b.component';
import { CComponent } from './home/c/c.component';
import { DComponent } from './home/d/d.component';
import { EComponent } from './home/e/e.component';
import { FComponent } from './home/f/f.component';
import { GComponent } from './home/g/g.component';
import { YComponent } from './home/y/y.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginFormComponent } from './home/login-form/login-form.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ErrorComponent } from './home/error/error.component';
import { StepsComponent } from './home/steps/steps.component';
import { BookingComponent } from './home/steps/booking/booking.component';
import { PersonalComponent } from './home/steps/personal/personal.component';
import { PaymentComponent } from './home/steps/payment/payment.component';
import { InformationComponent } from './home/steps/information/information.component';


const routes=[
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginFormComponent},
{path:'welcome',component:WelcomeComponent},
{path:'error',component:ErrorComponent},
{path:'registration',component:StepsComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent,
    YComponent,
    FooterComponent,
    HeaderComponent,
    LoginFormComponent,
    WelcomeComponent,
    ErrorComponent,
    StepsComponent,
    BookingComponent,
    PersonalComponent,
    PaymentComponent,
    InformationComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DpDatePickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
