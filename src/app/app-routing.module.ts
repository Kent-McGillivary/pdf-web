
import { PdfTestAreaComponent } from './pdf-test-area.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/pdfTestArea', pathMatch: 'full' },
  { path: 'pdfTestArea',  component: PdfTestAreaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
