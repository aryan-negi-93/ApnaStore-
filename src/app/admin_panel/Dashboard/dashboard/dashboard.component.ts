import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/Services/service.service';
// import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'email'];
  dataSource = new MatTableDataSource<any>();
  totalProducts: number = 0;
  totalUsers: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.getAllProductList();
  }

  loadUsers(): void {
    this.service.showAllusers().subscribe((data: any[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.totalUsers = data.length;
    });
  }

  getAllProductList(): void {
    this.service.getAllProducts().subscribe((data: any[]) => {
      this.totalProducts = data.length; // Get the total number of products
    });
  }


}
