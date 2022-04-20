import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothsService } from '../cloths.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.css']
})
export class UpdatingComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private ser: ClothsService, 
     private router1: Router) { }
  showenproduct: Product = new Product();


  ngOnInit(): void {

    // this.showenproduct.ProductId = this.router.snapshot.params['id'];
    this.ser.GetproductById(this.router.snapshot.params['id']).subscribe((data: Product) => {
      this.showenproduct = data;
      console.log(this.showenproduct)

     
     
    }
    )
    
}

save() {

  this.ser.edit(this.showenproduct).subscribe(succ => {
    console.log(succ);

  }, err => {
    console.log(err);
  })
}



}


