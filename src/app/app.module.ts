import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NewListComponent } from './new-list/new-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { DataManagerService } from './data-manager.service';
import { FormsModule } from '@angular/forms';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewListComponent,
    ShowListComponent,
    ListComponent,
    TaskComponent,
    RegisterViewComponent,
    LoginViewComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [
    DataManagerService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
