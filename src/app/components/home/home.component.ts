import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, BannerComponent],
})
export class HomeComponent {}
