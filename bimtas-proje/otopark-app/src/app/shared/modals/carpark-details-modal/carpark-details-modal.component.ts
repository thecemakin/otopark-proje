import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-carpark-details-modal',
  templateUrl: './carpark-details-modal.component.html',
  styleUrls: ['./carpark-details-modal.component.scss']
})
export class CarparkDetailsModalComponent implements OnInit{


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
  
  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
  }
}
