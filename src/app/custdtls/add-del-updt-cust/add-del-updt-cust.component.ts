import { Component, OnInit,Input } from '@angular/core';
import  { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-del-updt-cust',
  templateUrl: './add-del-updt-cust.component.html',
  styleUrls: ['./add-del-updt-cust.component.css']
})
export class AddDelUpdtCustComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() cust : any;
  custId:string="";
  CustName:string="";
  CustContact:string="";
  CustAddress:string="";
  CustCity:string="";
  CustState:string="";

  ngOnInit(): void {
    this.custId=this.cust.custId;
    this.CustName=this.cust.custName;
    this.CustContact=this.cust.custContact;
    this.CustAddress=this.cust.custAddress;
    this.CustCity=this.cust.custCity;
    this.CustState=this.cust.custState;
  }

  addCustDtls()
  {
var val={custName:this.CustName,
  custContact:this.CustContact,
  custAddress:this.CustAddress,
  custCity:this.CustCity,
  custState:this.CustState
};

  this.service.addCustDetails(val).subscribe(res=>{
    alert(res.toString());
  })
  }

  updateCustDtls()
  {var val={
    custId:this.custId,
    custName:this.CustName,
  custContact:this.CustContact,
  custAddress:this.CustAddress,
  custCity:this.CustCity,
  custState:this.CustState
  };
  
    this.service.updateCustDetails(val).subscribe(res=>{
      alert(res.toString());
    })

  }

}
