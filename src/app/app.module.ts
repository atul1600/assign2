import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router'; 
import { ChartsModule} from 'ng2-charts';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dom1Component } from './dom1/dom1.component';
import { Dom2Component } from './dom2/dom2.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes:Routes=[
{path:'dom1', component:Dom1Component},
{path:'dom2', component:Dom2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Dom1Component,
    Dom2Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule.forRoot(),

    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
