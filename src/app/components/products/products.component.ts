import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, ProductComponent],
})
export class ProductsComponent {}
