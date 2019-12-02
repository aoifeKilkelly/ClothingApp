import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ClothingServiceService } from '../Services/clothing-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private clothingService: ClothingServiceService) { }

  ngOnInit() {
  }
  mySize : QueuingStrategySizeCallback;
  onAddSize(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);
    console.log(form.value.size);
    this.mySize = new this.onAddSize(form.value.size);
    console.log(this.mySize);

    this.clothingService.AddClothingInformation(form.value.type,
      form.value.size, form.value.color).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}
