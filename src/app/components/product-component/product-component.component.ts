import { Component } from '@angular/core';

import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponentComponent {
  data: any[] = []; // Array to store fetched data
  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.data = data;
    });
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age,
    };

    this.productService.postProduct(body).subscribe((response) => {
      console.log(response);
    });
  }
}
