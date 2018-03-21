import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './book-store.service';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
