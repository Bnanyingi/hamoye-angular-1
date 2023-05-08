import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { Flight } from '../flight.model';
import { OpenskyApiService } from '../opensky-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // flights!: Flight[];

  flights: any;
  dataSource!: MatTableDataSource<[]>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  length = 0;
  pageSize = 5;

  displayedColumns: string[] = ['airport', 'departureTime', 'arrivalTime'];


  constructor(
    private router: Router,
    private openSkyApiService: OpenskyApiService,
  ) { }

  ngOnInit(): void {

    this.openSkyApiService.getFlights().subscribe(
      data => {
        this.flights = data;
        console.log(this.flights);
        this.dataSource = new MatTableDataSource(this.flights);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.length = this.flights.length;
      },
      error => console.log(error)
    );
  
  }

  paginatorEvent(event: PageEvent) {
    const { pageIndex, pageSize } = event;
    const end = (pageIndex + 1) * pageSize;
    const start = pageIndex * pageSize;
    this.dataSource = new MatTableDataSource(
      this.flights.slice(start, end),
    );
  }

 
  changePageSize($event: { value: any }) {
    const pageSize = $event.value;
    this.paginator.pageSize = pageSize;
    this.paginator.firstPage();
    this.paginatorEvent({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.length,
    });
  }

  logout(){
    this.router.navigateByUrl('')
  }

}
