import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-yout-cart',
  templateUrl: './yout-cart.component.html',
  styleUrls: ['./yout-cart.component.css']
})
export class YoutCartComponent {

  cart: any[] = []

  constructor(private service: ServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllcart();
  }

  getAllcart() {
    this.service.getCartItems().subscribe({
      next: (res: any) => {
        this.cart = res;

      }, error: (err) => {
        console.log(err);
      }
    })
  }

  calculateTotalPriceWithDiscount(cartItems: any[]): number {
    let totalPrice = 0;

    for (let item of cartItems) {
      totalPrice += item.productId.price;
    }

    const discount = totalPrice * 0.1;
    totalPrice -= discount;
    return totalPrice;
  }

  removeFromCart(itemId: string) {
    debugger
    this.service.removeFromCart(itemId).subscribe({

      next: (res: any) => {
        // this.toastr.warning("Product removed from cart successfully")
        this.getAllcart();
      },
      error: (err) => {
        console.log(err);
      }
    });
    window.location.reload()


  }

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '17613812255336763067',
      merchantName: 'Demo Only (you will not be charged)'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: "10.00",
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };

  onLoadPaymentData(event: Event) {
    console.log("load payment data", event);
  }

}
