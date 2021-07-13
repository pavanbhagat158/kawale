import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustEnqComponent } from './cust-enq/cust-enq.component';
import { ShowCustEnqComponent } from './cust-enq/show-cust-enq/show-cust-enq.component';
import { AddEditCustEnqComponent } from './cust-enq/add-edit-cust-enq/add-edit-cust-enq.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustdtlsComponent } from './custdtls/custdtls.component';
import { AddDelUpdtCustComponent } from './custdtls/add-del-updt-cust/add-del-updt-cust.component';
import { ShowcustdtlsComponent } from './custdtls/showcustdtls/showcustdtls.component';
import { WorkorderComponent } from './workorder/workorder.component';
import { ShowWorkorderComponent } from './workorder/show-workorder/show-workorder.component';
import { AddUpdtWorkorderComponent } from './workorder/add-updt-workorder/add-updt-workorder.component';

@NgModule({
  declarations: [
    AppComponent,
    CustEnqComponent,
    ShowCustEnqComponent,
    AddEditCustEnqComponent,
    CustdtlsComponent,
    AddDelUpdtCustComponent,
    ShowcustdtlsComponent,
    WorkorderComponent,
    ShowWorkorderComponent,
    AddUpdtWorkorderComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
