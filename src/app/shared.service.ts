import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

getCustEnqList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+"/custEnq/")
}

addCustEnq(val:any){
  return this.http.post(this.APIUrl+"/custEnq/",val)
}

updateCustEnq(val:any){
  return this.http.put(this.APIUrl+"/custEnq/",val)
}

deleteCustEnq(val:any){
  return this.http.delete(this.APIUrl+"/custEnq/"+val)
}

getCustDetailsList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+"/custDetails/")
}

addCustDetails(val:any){
  return this.http.post(this.APIUrl+"/custDetails/",val)
}

updateCustDetails(val:any){
  return this.http.put(this.APIUrl+"/custDetails/",val)
}

deleteCustDetails(val:any){
  return this.http.delete(this.APIUrl+"/custDetails/"+val)
}

getWorkorderList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+"/workOrder/")
}

addWorkorderDetails(val:any){
  return this.http.post(this.APIUrl+"/workOrder/",val)
}

updateWorkorderDetails(val:any){
  return this.http.put(this.APIUrl+"/workOrder/",val)
}

addWOrkOrderNote(val:any){
  return this.http.post(this.APIUrl+"/workOrderNotes/",val)
}

}
