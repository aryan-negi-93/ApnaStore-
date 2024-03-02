import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Services/service.service';
// Update the path accordingly

@Component({
  selector: 'app-view-single',
  templateUrl: './view-single.component.html',
  styleUrls: ['./view-single.component.css']
})
export class ViewSingleComponent implements OnInit {
  product: any; // Define product property to hold the product data

  constructor(private route: ActivatedRoute, private service: ServiceService ,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.service.getProductById(productId).subscribe(response => {
        this.product = response;
      });
    });
  }

  addToCart(product: any, event: Event): void {
    event.stopPropagation();
    this.toastr.success("Your item has been successfully added to the cart.")
    
    // Here you can call your service to add the product to the cart
    this.service.addToCart(product).subscribe({
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


