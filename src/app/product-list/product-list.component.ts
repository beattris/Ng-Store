import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone 15 pro max',
    price: 789,
    color: 'matte black',
    discount: 8.5,
    inStock: 10,
    pImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPmD3YNOZ_-bO-19Z7tEliZheuMJkoQJ12g&s',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
