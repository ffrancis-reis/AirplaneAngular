import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AirplanesComponent } from './airplanes/airplanes.component';
import { AirplaneComponent } from './airplanes/airplane/airplane.component';
import { AirplaneListComponent } from './airplanes/airplane-list/airplane-list.component';
import { AirplaneService } from './shared/airplane.service';

@NgModule({
  declarations: [
    AppComponent,
    AirplanesComponent,
    AirplaneComponent,
    AirplaneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
