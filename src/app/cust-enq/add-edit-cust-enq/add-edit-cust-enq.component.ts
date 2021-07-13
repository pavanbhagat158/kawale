import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cust-enq',
  templateUrl: './add-edit-cust-enq.component.html',
  styleUrls: ['./add-edit-cust-enq.component.css']
})
export class AddEditCustEnqComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() enq : any;
  EnqId:string="";
  CustName:string="";
  CustContact:string="";
  CustCity:string="";
  IsAttended:string="";

  ngOnInit(): void {
    this.EnqId=this.enq.enqId;
    this.CustName=this.enq.custName;
    this.CustContact=this.enq.custContact;
    this.CustCity=this.enq.custCity;
    this.IsAttended=this.enq.isAttended;
  }

  addCustEnq()
  {
var val={custName:this.CustName,
  custContact:this.CustContact,
  custCity:this.CustCity,
  isAttended:"No"
};

  this.service.addCustEnq(val).subscribe(res=>{
    alert(res.toString());
  })
  }

  updateCustEnq()
  {var val={
    enqId:this.EnqId,
    custName:this.CustName,
    custContact:this.CustContact,
    custCity:this.CustCity,
    isAttended:this.IsAttended
  };
  
    this.service.updateCustEnq(val).subscribe(res=>{
      alert(res.toString());
    })

  }

}
