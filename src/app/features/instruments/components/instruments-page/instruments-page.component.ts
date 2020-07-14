import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InstrumentDialogComponent } from '../../dialogs/instrument-dialog/instrument-dialog.component';
import { InstrumentService } from '../../../../core/services/instrument.service';
import { timer, Observable } from 'rxjs';
import { Instrument } from 'src/app/shared/models/Instrument.model';
import { DeleteDialogComponent } from '../../dialogs/delete-dialog/delete-dialog.component';
import { mergeMap } from 'rxjs/operators';
import { NewInstrumentDialogComponent } from '../../dialogs/new-instrument-dialog/new-instrument-dialog.component';

@Component({
  selector: 'app-instruments-page',
  templateUrl: './instruments-page.component.html',
  styleUrls: ['./instruments-page.component.less']
})
export class InstrumentsPageComponent implements OnInit {

  instruments: Array<Instrument>;
  filteredInstruments: Array<Instrument>;
  searchString = "";
  instrumentsSubscription: Observable<Instrument>;

  constructor(private matDialog: MatDialog, 
              private instrumentService: InstrumentService) 
  {
    this.instrumentsSubscription = this.instrumentService.get().pipe(mergeMap(x => {
      this.instruments = x.sort((a,b) => (a.type.toLowerCase()) > (b.type.toLowerCase()) ? 1 : -1);
      if (this.searchString != "") { 
        this.search(); // so new records that match the search will apear
      } else {
        this.filteredInstruments = this.instruments;
      }
      return x;
    }));

    // Load data periodically
    timer(0, 3000).subscribe(res => {
      this.instrumentsSubscription.subscribe()
    });
  }

  loadInstruments() {
     this.instrumentsSubscription.subscribe();
  }

  ngOnInit(): void {
  }

  delete(instrument: Instrument) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = instrument;
    this.matDialog.open(DeleteDialogComponent, dialogConfig).
    afterClosed().subscribe(deleted => {
      if (deleted) { // refresh data if instument was deleted
        this.loadInstruments.bind(this)();
      }
    });
  }

  openInstrumentInfo(instrument: Instrument) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = instrument;
    this.matDialog.open(InstrumentDialogComponent, dialogConfig);
  }

  openNewDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(NewInstrumentDialogComponent, dialogConfig).
    afterClosed().subscribe(created => {
      if (created) {
        this.loadInstruments.bind(this)();
      }
    });
  }

  search() {
    if (this.searchString) {
      this.filteredInstruments = this.instruments.filter(x => x.name.toLowerCase().
      includes(this.searchString.toLowerCase()));
    } else if (this.searchString == "") {
      this.filteredInstruments = this.instruments;
    }
  }
}
