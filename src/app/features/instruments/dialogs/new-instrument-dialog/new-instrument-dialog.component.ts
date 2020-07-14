import { Component, OnInit } from '@angular/core';
import { InstrumentService } from 'src/app/core/services/instrument.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-instrument-dialog',
  templateUrl: './new-instrument-dialog.component.html',
  styleUrls: ['./new-instrument-dialog.component.less']
})
export class NewInstrumentDialogComponent implements OnInit {

  name: string = "";
  symbol: string = "";
  type: string = "";
  errorMessage: string = "*Please fill all fields";
  displayError: boolean = false;
  disabled: boolean = false;

  constructor(private instrumentService: InstrumentService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NewInstrumentDialogComponent>,) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  create(){
    if (this.name === "" || this.symbol === "" || this.type === "") {
      this.displayError = true;
    } else {
      this.disabled = true; // to prevent clicks while querying
      this.instrumentService.add(this.name, this.symbol, this.type).then(
        res => {
            this.snackBar.open("Instrument was added!", "Close", {
              duration: 2000,
            });
            this.dialogRef.close(true);
        }, e => { 
          const errorMessage = e.error.error ? e.error.error : e.message;
          console.log(`Error: ${JSON.stringify(errorMessage)}`);
          this.snackBar.open(`Operation failed!`, "Close", {
            duration: 5000,
          });
          this.dialogRef.close();
        }
      );
    }
  }

}
