import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClothsService } from '../cloths.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // Product!:Product [];
  Allname!: Product[];
  names!:any[];
  categories!:any[];
  // Allcategory!: Product[];
  @Output()
  clickFilter = new EventEmitter();

  constructor(private Ser: ClothsService) { }
  nameSelect: any;
  categorySelect: any;


  prices: { value: number, name: string }[] =
    [{ value: 1, name: '100-400' }, { value: 2, name: '400-1000' }, { value: 3, name: '1000-ומעלה' }]
  priceSelect: number = 0

  ngOnInit(): void {
    this.Ser.GetAllProduct().subscribe(succ => {
      this.Allname = succ;
      this.names = this.Allname.map(e => e.productName);
      this.categories = this.Allname.map(e => e.category);
    });



  }
  searchFilter() {
    
    this.clickFilter.emit({ name: this.nameSelect, category: this.categorySelect, priceId: this.priceSelect });


  }

}
