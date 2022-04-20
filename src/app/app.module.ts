import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddprodactComponent } from './addprodact/addprodact.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { RegisterorloginComponent } from './registerorlogin/registerorlogin.component';
import { UpdatingComponent } from './updating/updating.component';
import { ClothComponent } from './cloth/cloth.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';


import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddprodactComponent,
    FilterComponent,
    HomeComponent,
    PictureComponent,
    RegisterorloginComponent,
    UpdatingComponent,
    ClothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,MatFormFieldModule,MatButtonModule,MatIconModule,MatInputModule,MatCheckboxModule,
    ReactiveFormsModule,

    MatNativeDateModule,MatSelectModule,MatCardModule,MatRadioModule,MatMenuModule,MatTabsModule,MatToolbarModule,MatSliderModule

  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
