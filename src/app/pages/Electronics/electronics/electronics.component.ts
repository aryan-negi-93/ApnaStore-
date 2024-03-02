import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {

  Electronics: any[] = []

  constructor(private electronics: ServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.getProduct();
  }


  getProduct() {
    this.electronics.getAllElectronics().subscribe({
      next: (res: any) => {
        this.Electronics = res;
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
    this.electronics.addToCart(product).subscribe({
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
