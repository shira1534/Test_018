import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClothsService } from '../cloths.service';
import { Photo } from '../models/Photo';
import { Product } from '../models/Product';

@Component({
  selector: 'app-addprodact',
  templateUrl: './addprodact.component.html',
  styleUrls: ['./addprodact.component.css']
})
export class AddprodactComponent implements OnInit {


  // user: Users = new Users();
  // idUser: number = 0;







  constructor(public dialog: MatDialog, private ser: ClothsService, private router: Router) { }

  ngOnInit(): void {
  }
  
  url: any[] = []
  onSelectFile(event: any) {


    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event.target) {
          console.log(this.url);

          this.url.push(event.target.result);
        }
      }
    }
  }

  newcloth: Product = new Product();
  photos: Photo[] = []
  savecloth(){



    

        this.ser.addProduct(this.newcloth).subscribe(succ => {

          this.url.forEach(u => this.photos.push(new Photo(u, succ.ProductId)));
          this.ser.AddPhotos(this.photos).subscribe(succ => {
            if(succ){
              Swal.fire({  
                position: 'center',  
                icon: 'success',  
                title: 'Your work has been saved',  
                showConfirmButton: false,  
                timer: 5000  
              }) 
              this.router.navigate(['/home']);
            }
          })
        })
    












  }



}
