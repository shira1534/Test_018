import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothsService } from '../cloths.service';
import { Product } from '../models/Product';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  GetAllclothes!: Product[];
  displayclothes!: any[];
  photosclothesArr!: any[];
  clothe: Product = new Product;

  constructor(private router: Router, private ser: ClothsService,  private searchService :SearchService) { }
  ngOnInit(): void {
    this.ser.GetAllProduct().subscribe(succ => {
      this.GetAllclothes = succ;
      console.log(succ);
      this.displayclothes = this.GetAllclothes;
      // this.ser.photo().subscribe(z => {
      //   this.photosclothesArr = z;
        // this.initphotos();
      // });
    });
  }
  update(id:any) {
    // debugger
    console.log(id);
    this.router.navigate(['/updating',id]);
  }
  filtercloth(value: any) {
    // debugger
    this.searchService.search(value.name, value.category,value.priceId).subscribe(clothes => {
      console.log(clothes);
      this.displayclothes = clothes;
      // this.initphotos();
    })
  }
  // initphotos() {
  //   this.displayclothes.forEach(u => {
  //     this.photosZimmersArr.forEach(t => {
  //       if (u.id == t.idZimmer) {
  //         u.routing = t.routing
  //       };
  //     })
  //   });
  // }
}
