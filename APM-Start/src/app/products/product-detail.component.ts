import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'ProductDetail';
  product: IProduct;

  onBack(): void {
    this.router.navigate(['/products']);
  }
  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    //plus converts string to numeric id
    this.pageTitle += `: ${id}`8
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

}
