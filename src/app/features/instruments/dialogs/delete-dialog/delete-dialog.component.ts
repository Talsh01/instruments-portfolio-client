import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstrumentService } from 'src/app/core/services/instrument.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.less']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private instrumentService: InstrumentService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.instrumentService.delete(this.data.id).then(
      res => {
          this.snackBar.open("Instrument was deleted!", "Close", {
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

  cancel() {
    this.dialogRef.close();
  }

}
