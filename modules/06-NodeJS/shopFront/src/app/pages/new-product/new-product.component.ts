import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  files: File[] = [];

  newProductForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price: new FormControl(null),
    stock: new FormControl(null),
    department: new FormControl(null),
    available: new FormControl(true)
  });
  productsService = inject(ProductsService);

  async onSubmit() {
    const formData = new FormData();
    formData.append('name', this.newProductForm.value.name);
    formData.append('description', this.newProductForm.value.description);
    formData.append('price', this.newProductForm.value.price);
    formData.append('stock', this.newProductForm.value.stock);
    formData.append('department', this.newProductForm.value.department);
    formData.append('available', this.newProductForm.value.available);
    formData.append('image', this.files[0]);

    console.log(formData);

    try {
      const product = await this.productsService.create(formData);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  }

  onFileSelected($event : any){
    this.files = $event.target.files;
  }

}
