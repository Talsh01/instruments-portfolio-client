import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instrument-list-item',
  templateUrl: './instrument-list-item.component.html',
  styleUrls: ['./instrument-list-item.component.less']
})
export class InstrumentListItemComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() symbol: string;
  @Input() type: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
