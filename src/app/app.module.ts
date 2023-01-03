import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurntlistComponent } from './restaurntlist/restaurntlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestaurntComponent } from './view-restaurnt/view-restaurnt.component';
import { AddRestaurntComponent } from './add-restaurnt/add-restaurnt.component';
import { FormsModule } from '@angular/forms';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { DeleteRestaurntComponent } from './delete-restaurnt/delete-restaurnt.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurntlistComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestaurntComponent,
    AddRestaurntComponent,
    UpdateResturantComponent,
    DeleteRestaurntComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
