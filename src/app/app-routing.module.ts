import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentsPageComponent } from './features/instruments/components/instruments-page/instruments-page.component';

const routes: Routes = [
  { path: '', component: InstrumentsPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
