import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  fashion: any[] = [];
  Electronics: any[] = [];
  Mobiles: any[] = [];

  constructor(private Service: ServiceService, private toastr: ToastrService, private router: Router) { }


  ngOnInit(): void {
    this.getfashion();
    this.getElectronics();
    this.getMobiles();
  }

  getfashion() {
    this.Service.getAllFashion().subscribe({
      next: (res: any) => {
        this.fashion = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  getElectronics() {
    this.Service.getAllElectronics().subscribe({
      next: (res: any) => {
        this.Electronics = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  getMobiles() {
    this.Service.getAllMobiles().subscribe({
      next: (res: any) => {
        this.Mobiles = res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }



  addToCart(product: any, event: Event): void {
    event.stopPropagation();
    this.toastr.success("Your item has been successfully added to the cart.")
    
    // Here you can call your service to add the product to the cart
    this.Service.addToCart(product).subscribe({
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


  viewProduct(productId: string) {
    this.router.navigate(['/sproduct', productId]);
    console.log(productId);

  }

}
