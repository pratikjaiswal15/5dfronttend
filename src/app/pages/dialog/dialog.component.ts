import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MomentServiceService } from 'src/app/services/moment-service.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToasterService } from 'src/app/services/toaster.service';

@UntilDestroy()

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data, public momentServiceService : MomentServiceService,
  public toasterService : ToasterService) { 
    console.log(data)
  }

  ngOnInit(): void {
  }
  delete() {
    console.log('hi')
    this.momentServiceService.delete_moment(this.data.id)
    .pipe(untilDestroyed(this))
    .subscribe(data => {
      console.log(data)
      this.toasterService.showSuccess('Moment deleted')
    })
  }

}
