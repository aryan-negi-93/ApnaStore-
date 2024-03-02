import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';

  getHeroImages(): Observable<any> {
    return this.http.get('http://localhost:3000/hero')
  }

  getAllProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/products")
  }

  deleteProduct(_id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/delete/${_id}`);
  }

  getAllShoes(): Observable<any> {
    return this.http.get('http://localhost:3000/products?category=Shoes')
  }

  getAllFashion() {
    return this.http.get('http://localhost:3000/products?category=Fashion')
  }

  getAllElectronics(): Observable<any> {
    return this.http.get('http://localhost:3000/products?category=Electronics')
  }

  getAllAppliances(): Observable<any> {
    return this.http.get('http://localhost:3000/products?category=Appliances')
  }

  getAllMobiles(): Observable<any> {
    return this.http.get('http://localhost:3000/products?category=Mobiles')
  }

  getAllGrocery(): Observable<any> {
    return this.http.get('http://localhost:3000/products?category=Grocery')
  }


  postNewProduct(data: any) {
    return this.http.post('http://localhost:3000/single', data)
  }

  addToCart(product: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/cart/add/' + product._id, {});
  }
  getCartItems(): Observable<any> {
    return this.http.get(`http://localhost:3000/cart`);
  }


  registerData(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/signup', userData);
  }

  loginData(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', credentials);
  }


  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${productId}`);
  }


  removeFromCart(itemId: string): Observable<any> {
    const url = `${this.baseUrl}/cart/delete/${itemId}`;
    return this.http.delete<any>(url);

  }

  updateProduct(productId: string, updatedProductData: any): Observable<any> {
    const url = `http://localhost:3000/products/${productId}`; // Construct the API endpoint URL for updating a specific product
    return this.http.put(url, updatedProductData);
  }

  showAllusers(): Observable<any[]> { // Specify the return type as Observable<any[]>
    return this.http.get<any[]>('http://localhost:3000/users'); // Explicitly specify the type of data being fetched
  }

}







