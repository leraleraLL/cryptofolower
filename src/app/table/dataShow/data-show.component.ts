import { Component, OnInit } from '@angular/core';
import { map, reduce } from 'rxjs';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.less'],
  providers: [DataService]
})
export class DataShowComponent implements OnInit{
 
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {

    this.getData()

    setInterval(()=>
      this.getData(), 30000 );
      
    setInterval(() => {
      this.time = new Date();
    }, 1);
  }

  getData() {
    this.dataService.DataPopular().subscribe(value => {
      this.numsElems = value.length
    })  
  }

  public time: Date = new Date();
  numsElems: number  = 0

}
