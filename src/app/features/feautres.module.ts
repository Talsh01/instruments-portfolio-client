import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { InstrumentsPageComponent } from './instruments/components/instruments-page/instruments-page.component';
import { InstrumentListItemComponent } from './instruments/components/instrument-list-item/instrument-list-item.component';
import { InstrumentDialogComponent } from './instruments/dialogs/instrument-dialog/instrument-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewInstrumentDialogComponent } from './instruments/dialogs/new-instrument-dialog/new-instrument-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeleteDialogComponent } from './instruments/dialogs/delete-dialog/delete-dialog.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    InstrumentsPageComponent,
    InstrumentListItemComponent,
    InstrumentDialogComponent,
    NewInstrumentDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class FeaturesModule { }
