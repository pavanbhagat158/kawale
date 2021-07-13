import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-updt-workorder',
  templateUrl: './add-updt-workorder.component.html',
  styleUrls: ['./add-updt-workorder.component.css']
})
export class AddUpdtWorkorderComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() work : any;
  @Input() tork : any;
  workId:string="";
  CustId:string="";
  WorkDetails:string="";
  Kw:string="";
  WorkStat:string="";
  note:string="";
flagNote:string="";
  ngOnInit(): void {
    console.log("this is work"+this.tork.flagNote);
    this.workId=this.work.workId;
    this.CustId=this.work.custId;
    this.WorkDetails=this.work.workDetails;
    this.Kw=this.work.kw;
    this.WorkStat=this.work.workStat;
    this.flagNote=this.tork.flagNote;
  }

  addCWorkOrder()
  {
var val={custId:this.CustId,
  workDetails:this.WorkDetails,
  kw:this.Kw,
  workStat:"New Work"
};



  this.service.addWorkorderDetails(val).subscribe(res=>{
    alert(res.toString());
  });
  }
  addNote()
  {
    var val={workId:this.workId,
      workNotes:this.note};
      this.service.addWOrkOrderNote(val).subscribe(res=>{
        alert(res.toString());
      });
      
  }
  updateWorkOrder()
  {var val={workId:this.workId,
    custId:this.CustId,
  workDetails:this.WorkDetails,
  kw:this.Kw,
  workStat:this.WorkStat
  };
  
    this.service.updateWorkorderDetails(val).subscribe(res=>{
      alert(res.toString());
    })

  }

}
