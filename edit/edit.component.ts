import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {ClothingServiceService} from '../Services/clothing-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
clothing:any=[];
  constructor(private clothingService:ClothingServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.clothingService.GetClothing(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.clothing = data;
          console.log(this.clothing);
      }
    );

  }
  onEditClothing(form:NgForm){
    console.log(form.value.type);
    this.clothingService.UpdateClothing(this.clothing._id, form.value.type,
      form.value.size, form.value.color).subscribe();
  }
}
