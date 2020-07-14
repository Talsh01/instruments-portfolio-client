import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-instrument-dialog',
  templateUrl: './instrument-dialog.component.html',
  styleUrls: ['./instrument-dialog.component.less']
})
export class InstrumentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InstrumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
