import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClothsService } from '../cloths.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {

  constructor(private router: Router, private ser: ClothsService, public dialog: MatDialog) { }
  // @Input()
  // displayclothes: Product[] = [];
  // @Input()
  // addremark: boolean = false;
  // clothe: Product = new Product;
  ngOnInit(): void {
  }
  // update(id:any) {
  //   this.router.navigate(['/updating',id]);
  // }


  
}