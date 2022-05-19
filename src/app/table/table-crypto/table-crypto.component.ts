import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-crypto',
  templateUrl: './table-crypto.component.html',
  styleUrls: ['./table-crypto.component.less'],
  providers: [DataService]
})

export class TableCryptoComponent implements AfterViewInit, OnInit{
 
  constructor(private dataService: DataService, private _liveAnnouncer: LiveAnnouncer){}

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.getData()

    setInterval(()=>
      this.getData(), 30000 );
  }

  getData() {
    this.dataService.DataPopular().subscribe(value => {
      this.dataSource.data = value;
    })
  }

  displayedColumns: string[] = ['position', 'FullName', 'Name', 'PRICE', 'MKTCAP', 'CHANGEPCT24HOUR'];
  dataSource = new MatTableDataSource()

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
