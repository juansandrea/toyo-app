import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatSelectModule
 } from '@angular/material';


const myModule= [MatCardModule,MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatSelectModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, myModule
  ],
  exports:[ myModule]
})
export class MaterialModule { }
