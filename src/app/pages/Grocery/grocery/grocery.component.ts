import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {

  Grocery: any[] = []

  constructor(private groceryService: ServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getProduct();
  }

  getProduct() {
    this.groceryService.getAllGrocery().subscribe({
      next: (res: any) => {
        this.Grocery = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  viewProduct(productId: string) {
    this.router.navigate(['/sproduct', productId]);
    console.log(productId);

  }

  addToCart(product: any, event: Event): void {
    event.stopPropagation();
    this.toastr.success("Your item has been successfully added to the cart.")

    // Here you can call your service to add the product to the cart
    this.groceryService.addToCart(product).subscribe({
      next: () => {
        // Optionally, you can show a success message or update the UI
        console.log('Product added to cart successfully');
        this.toastr.success("add successfull")

      },
      error: (err) => {
        console.error('Error adding product to cart:', err);
        // Handle error appropriately, e.g., show a toast message
      }
    });
  }

}
