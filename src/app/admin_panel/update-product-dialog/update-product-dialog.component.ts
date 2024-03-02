import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/Services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product-dialog',
  templateUrl: './update-product-dialog.component.html',
  styleUrls: ['./update-product-dialog.component.css']
})
export class UpdateProductDialogComponent {
  updateProductForm: FormGroup;
  selectedImage: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<UpdateProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: ServiceService,
    private toastr: ToastrService
  ) {
    this.updateProductForm = this.fb.group({
      name: [data.name, Validators.required],
      brand: [data.brand, Validators.required],
      category: [data.category, Validators.required],
      description: [data.description, Validators.required],
      price: [data.price, Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  // Method to handle file change event
  // onFileChange(event: any): void {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     this.selectedImage = files[0];
  //   }
  // }

  onSubmit(): void {
    if (this.updateProductForm.valid) {
      const updatedProductData = this.updateProductForm.value;
      // Assuming you have a separate function to handle image update
      this.service.updateProduct(this.data._id, updatedProductData).subscribe(
        (res) => {
          console.log('Product updated successfully:', res);
          this.dialogRef.close();
          this.toastr.success('Product updated successfully!', 'Success');
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      // this.updateProductForm.markAllAsTouched();
      this.toastr.warning("not valid")
    }
  }
}
