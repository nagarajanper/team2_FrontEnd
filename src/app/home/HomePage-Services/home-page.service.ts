import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Home-Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {



 

  products: IProduct[]=[];
  constructor(private http: HttpClient) 
  {
   
  }

  //Getting the Products from backend API
  getProducts():Observable<IProduct[]>{
    let tempVar = this.http.get<IProduct[]>('https://quick-kart-backend-team2-nagaraj.azurewebsites.net/api/home/getproducts')
    console.log(tempVar)
    return tempVar
  }

  PostNewSubscriber(emailID:string):Observable<boolean>{
  
    console.log(emailID)

    let tempVar = this.http.get<boolean>('https://quick-kart-backend-team2-nagaraj.azurewebsites.net/api/Customer/AddNewSubscriber?emailID='+emailID)
    console.log(tempVar)
    return tempVar
  }

  
  ValidateUser(userEmailID:string, userPassword:string, type:string):Observable<number>
  {
    var user:User
    user={emailID:userEmailID, password:userPassword,usertype:type};
    console.log(user)
    let result=this.http.post<number>('https://quick-kart-loginfunction-nagaraj.azurewebsites.net/api/LoginFunction?code=fldJx4LrdxpIfEMzliycbpWb1xfEkd7tu1Kqj17R7wNVAzFujQAK4w==',user)
    return result

  }

  

  
}

export class User{

  emailID:string='';
  password:string='';
  usertype:string='';


}
