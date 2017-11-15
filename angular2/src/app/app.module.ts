import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
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

const routes=[
{path:'home',component:HomeComponent},
{path:'login',component:LoginFormComponent},
{path:'welcome',component:WelcomeComponent},
{path:'error',component:ErrorComponent}
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
    ErrorComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
