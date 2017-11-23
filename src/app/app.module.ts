import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { PdfTestAreaComponent } from './pdf-test-area.component';

import { PdfViewerComponent } from './pdf/pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfTestAreaComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
