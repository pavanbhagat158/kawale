import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-showcustdtls',
  templateUrl: './showcustdtls.component.html',
  styleUrls: ['./showcustdtls.component.css']
})
export class ShowcustdtlsComponent implements OnInit {

  constructor(private service:SharedService) { }

  custDtlsList:any=[];
  
  ActivateAddEditCustDtlsComp:boolean=false;
  cust:any;
  ModalTitle:string="";

  ngOnInit(): void {
    this.refreshCustDtls();
  }
  addCustClick(){
    this.cust={
      custId:0,
      CustName:"",
      CustContact:"",
      CustAddress:"",
      CustCity:"",
      CustState:""
    } 
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustDtlsComp=true;

  }

  editCustClick(item:any)
  {
this.cust=item;
console.log(this.cust);
this.ModalTitle="Update Customer";
this.ActivateAddEditCustDtlsComp=true;
  }
    closeCustClick(){
      this.ActivateAddEditCustDtlsComp=false;
      this.refreshCustDtls();
    }

 

    refreshCustDtls()
{
  this.service.getCustDetailsList().subscribe(data=>{
    this.custDtlsList=data;
  })
}

}
