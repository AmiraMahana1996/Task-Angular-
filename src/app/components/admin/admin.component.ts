import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  alertType: string = 'success'; // Set default alert type
  data: any[] = []; // Array to store fetched data

  displayStyle = 'none';
  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  openModal() {
    this.displayStyle = 'block';
  }
  update(item: any) {
    console.log(item);
    this.productService.updateData(item.id, item).subscribe((data) => {
      console.log('Updated');
    });
  }
  close() {
    this.displayStyle = 'none';
  }

  delete(item: any) {
    //
    Swal.fire({
      title: 'Are you sure to delete this item?',
      text: 'text',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((ok) => {
      if (ok.isConfirmed) {
        console.log(item);
        this.productService.deleteData(item.id).subscribe((ele) => {
          this.data = this.data.filter((user: any) => user.id !== item.id);
        });
      }
    });
  }
}
