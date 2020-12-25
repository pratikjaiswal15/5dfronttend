import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MomentServiceService } from 'src/app/services/moment-service.service';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {MatTableDataSource} from '@angular/material/table'
import {MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@UntilDestroy()

@Component({
  selector: 'app-all-moments',
  templateUrl: './all-moments.component.html',
  styleUrls: ['./all-moments.component.scss']
})
export class AllMomentsComponent implements OnInit {


  displayedColumns: string[] = ['Sr.no','image_url', 'comment', 'tags','name', 'action'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort | undefined;
  subscribe3: any;

  constructor(public authenticationSerice : AuthenticationService, public fb: FormBuilder, public momentServiceService : MomentServiceService, public router : Router,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.momentServiceService.getall_moment().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;


    })
  }


  logout(){
    console.log('cliked')
    this.authenticationSerice.logout()
  }

  edit(row){
    console.log(row)

    let navigationExtras: NavigationExtras = {
      state: {
       row : row
      }
  };

  this.router.navigate(['update-moments'], navigationExtras);
  
  }

  delete(row) {
    console.log(row.id)
    let id = row._id

  const dialogRef = this.dialog.open(DialogComponent,  {
    width: '500px',
    data: { id },
  });


 this.subscribe3=  dialogRef.afterClosed().subscribe(result => {

    console.log(result)
    
   
    console.log('The dialog was closed');
  });

}
}
