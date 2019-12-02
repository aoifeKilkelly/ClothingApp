import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Clothing} from '../clothing.model';

@Injectable({
  providedIn: 'root'
})
export class ClothingServiceService {

  constructor(private http:HttpClient) { }

  GetClothingInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/clothing');
  }

  AddClothingInformation(type:string,size:string,color:string):Observable<any>{
    const clothing:Clothing = {type:type, size:size, Color:color};
    return this.http.post('http://localhost:4000/api/clothing', clothing)
  }

  DeleteClothing(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/clothing/'+id);
  }

  GetClothing(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/clothing/'+id);
  }

  UpdateClothing(id:String,type:string, size:string, color:string):Observable<any>{
    const clothing: Clothing = {type:type, size:size, Color:color};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/clothing/'+id, clothing);
  }



}
