import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog for dialogs
import { UpdateProductDialogComponent } from 'src/app/admin_panel/update-product-dialog/update-product-dialog.component';


@Component({
  selector: 'app-select-cat',
  templateUrl: './select-cat.component.html',
  styleUrls: ['./select-cat.component.css']
})
export class SelectCatComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  currentPage: number = 1;
  displayedColumns: string[] = ['number', 'image', 'name', 'brand', 'category', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  AllProducts: any[] = [];

  constructor(private Service: ServiceService, private dialog: MatDialog) { } // Inject MatDialog service

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.Service.getAllProducts().subscribe({
      next: (res: any) => {
        this.AllProducts = res;
        this.dataSource = new MatTableDataSource(this.AllProducts);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err, " this is error");
      }
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }

  // Function to delete a product
  deleteProduct(_id: string): void {
    this.Service.deleteProduct(_id).subscribe({
      next: () => {
        // After successful deletion, refresh the product list
        this.getAllProducts();
      },
      error: (err) => {
        console.error(err);
        // Handle error appropriately, e.g., show a toast message
      }
    });
  }

  // Function to apply filter based on user input
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Function to open the update product dialog
  updateProduct(element: any): void {
    // Open the update product dialog
    const dialogRef = this.dialog.open(UpdateProductDialogComponent, {
      width: '500px',
      data: element // Pass the product data to the dialog
    });

    // Subscribe to the dialog's afterClosed event to handle the result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the dialog was closed with a result (updated product), refresh the product list
        this.getAllProducts();
      }
    });
  }
}
