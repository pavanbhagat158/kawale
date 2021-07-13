import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustEnqComponent } from './cust-enq/cust-enq.component';
import { CustdtlsComponent } from './custdtls/custdtls.component';
import { WorkorderComponent } from './workorder/workorder.component';


const routes: Routes = [
  {path:'custenq',component:CustEnqComponent},
  {path:'custdtls',component:CustdtlsComponent},
  {path:'workorder',component:WorkorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
