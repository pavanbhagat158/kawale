import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cust-enq',
  templateUrl: './show-cust-enq.component.html',
  styleUrls: ['./show-cust-enq.component.css']
})
export class ShowCustEnqComponent implements OnInit {

  constructor(private service:SharedService) { }

  custEnqList:any=[];
  
  ActivateAddEditCustEnqComp:boolean=false;
  enq:any;
  ModalTitle:string="";

  ngOnInit(): void {
    this.refreshCustEnq();
  }
  addClick(){
    this.enq={
      EnqId:0,
      CustName:"",
      CustContact:"",
      CustCity:"",
      IsAttended:""
    } 
    this.ModalTitle="Add Enq";
    this.ActivateAddEditCustEnqComp=true;

  }

  editClick(item:any)
  {
this.enq=item;
console.log(this.enq);
this.ModalTitle="Change Enq Status";
this.ActivateAddEditCustEnqComp=true;
  }
    closeClick(){
      this.ActivateAddEditCustEnqComp=false;
      this.refreshCustEnq();
    }

 

refreshCustEnq()
{
  this.service.getCustEnqList().subscribe(data=>{
    this.custEnqList=data;
  })
}

}
