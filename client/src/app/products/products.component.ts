import { Component, OnInit } from '@angular/core';
import { Products } from '../modules/products';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

	products = {
        title: "",
        description: "",
        priority: 0
  };

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
  }

  productsandservices(){
      this.userService.insertproducts(this.products).subscribe(
        data => {
            this.router.navigate(['/dashboard']);
          },
         error =>{
                console.log(error);
            }
        );
  	 }


}
