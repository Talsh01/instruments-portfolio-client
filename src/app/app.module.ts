import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeaturesModule } from './features/feautres.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentPageGuard } from './core/guards/continentPage.guard';
import { NgxConfigureModule, NgxConfigureOptions } from 'ngx-configure';
import { AppOptions } from './core/utils/app.options';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    NgxConfigureModule.forRoot(),
    MatDialogModule
  ],
  providers: [ContinentPageGuard,
    { provide: NgxConfigureOptions, useClass: AppOptions }],
  bootstrap: [AppComponent]
})
export class AppModule { }
