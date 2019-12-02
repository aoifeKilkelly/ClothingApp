import { Component, OnInit } from '@angular/core';
import { ClothingServiceService } from '../Services/clothing-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyClothing: any = [];
  constructor(private clothingService: ClothingServiceService) { }

  ngOnInit() {
    this.clothingService.GetClothingInformation().subscribe((data) => {
      this.MyClothing = data.clothing;
      console.log(this.MyClothing);
    })
  }

  onDelete(id:String){
    console.log("Deleting clothing with id: "+id);
    this.clothingService.DeleteClothing(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }

}
