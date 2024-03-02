import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent {

  @ViewChild('exampleModal') exampleModal: any; // Reference to the modal


  selectedFile?: File;
  progress = 0;
  message = '';
  uploadForm: FormGroup;
  loading: boolean = false;

  products: any[] = []
  selectedCategory: string = 'Shoes';
  constructor(private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private PostService: ServiceService){
    this.uploadForm = this.formBuilder.group({
      image: [''],
      name: [''],
      brand: [''],
      price: [''],
      category: [''],
      description: [''],
    });
  }



  ngOnInit(): void {
    // this.getproducts();
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile) {
      this.message = 'No file selected.';
      return;

    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('name', this.uploadForm.get('name')?.value);
    formData.append('brand', this.uploadForm.get('brand')?.value);
    formData.append('category', this.uploadForm.get('category')?.value);
    formData.append('price', this.uploadForm.get('price')?.value);
    formData.append('description', this.uploadForm.get('description')?.value);

    this.loading = true;

    setTimeout(() => {
      this.PostService.postNewProduct(formData).subscribe({
        next: () => {
          this.toastr.success('Product added successfully!');
          // Hide loading spinner
          this.loading = false;
          // Close the modal
          // this.toastr.warning("ho gya")
          this.exampleModal.hide();
          
        },
        error: (err) => {
          console.warn(err);
          // Hide loading spinner
          this.loading = false;
          // Close the modal
          this.exampleModal.hide();
        }
      });
    }, 5000);

  }



}
