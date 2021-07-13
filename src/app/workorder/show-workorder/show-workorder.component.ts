import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-workorder',
  templateUrl: './show-workorder.component.html',
  styleUrls: ['./show-workorder.component.css']
})
export class ShowWorkorderComponent implements OnInit {

  constructor(private service:SharedService) { }
  workorderDetailsList:any=[];
 
  
  ActivateAddEditWorkorderComp:boolean=false;
  ActivateAddNoteWorkorderComp:boolean=false;
  work:any;
  tork:any;
  ModalTitle:string="";

  ngOnInit(): void {
    this.refreshWorkorder();
  }
  addClick(){
    this.work={
      workId:0,
      CustId:"",
      WorkDetails:"",
      Kw:"",
      WorkOrderDt:"",
      WorkStat:""
    } 
    this.tork={
      flagNote:0
    };
    this.ModalTitle="Add Work Order";
    this.ActivateAddEditWorkorderComp=true;

  }

  addNoteClick(item:any){
    this.work=item;
    this.ModalTitle="Add Note";
    this.tork={
      flagNote:1
    };
    console.log(this.work);
    console.log(this.tork);
    this.ActivateAddNoteWorkorderComp=true;
  }

  editClick(item:any)
  {
this.work=item;
this.tork={
  flagNote:0
};
console.log(this.work);
this.ModalTitle="Edit Work Order";
this.ActivateAddEditWorkorderComp=true;
  }
    closeClick(){
      this.ActivateAddEditWorkorderComp=false;
      this.ActivateAddNoteWorkorderComp=false;
      this.refreshWorkorder();
      this.tork={
        flagNote:0
      };
    }

 

    refreshWorkorder()
{
  this.service.getWorkorderList().subscribe(data=>{
    this.workorderDetailsList=data;
  })
}

}
