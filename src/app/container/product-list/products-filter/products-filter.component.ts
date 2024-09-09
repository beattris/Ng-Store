import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css'
})

export class ProductsFilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() OutOfStock: number = 0;
}
