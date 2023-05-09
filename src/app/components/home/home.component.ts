import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from '../category/category.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    BannerComponent,
    CategoryComponent,
    ProductsComponent,
  ],
})
export class HomeComponent {}
