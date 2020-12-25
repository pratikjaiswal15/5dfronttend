import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder ,Validators } from '@angular/forms';
import { MomentServiceService } from '../../services/moment-service.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster.service';

@UntilDestroy()

@Component({
  selector: 'app-update-moments',
  templateUrl: './update-moments.component.html',
  styleUrls: ['./update-moments.component.scss']
})
export class UpdateMomentsComponent implements OnInit, OnDestroy {

  data : any;
  
  subscibe1: Subscription;
  old_comment: string | undefined;
  old_tags: any;
  old_image_url: string | undefined;
  

  get comment() {
    return this.updateMform.get('comment')
  }

  set comment(n) {
   this.updateMform.controls['comment'].setValue(n)
  }

  get image_url() {
    return this.updateMform.get('image_url')
  }


  set image_url(n) {
    this.updateMform.controls['image_url'].setValue(n)
   }

  get tags() {
    return this.updateMform.get('tags')
  }

  set tags(n) {
    this.updateMform.controls['tags'].setValue(n)
   }

  updateMform = this.fb.group({
    comment : ['', [Validators.required, Validators.minLength(3)] ],
    tags : [''],
    image_url : [''],

  })

  constructor(public MomentServiceService : MomentServiceService, private route: ActivatedRoute, private router: Router,
    private fb:FormBuilder, public toasterService : ToasterService) {
    this.subscibe1 = this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.row;
        this.comment = this.data.comment
        this.tags = this.data.tags
        this.image_url = this.data.image_url
        console.log(this.data)
      }
    });

  
   }

  ngOnDestroy(): void {
    if(this.subscibe1 instanceof Subscription) {
      this.subscibe1.unsubscribe()
    }
  }

  ngOnInit(): void {
    if('5fe593fdd3023c35d09fa477' == '5fe593fdd3023c35d09fa477'){
      console.log(true)
    }
    else {
      console.log(false)
    }
  }


  update(form){
    console.log(form)
    let data = {
      comment : form.comment,
      date : new Date
    }

    console.log(data)

    this.MomentServiceService.update_moment(data,this.data._id)
    .pipe(untilDestroyed(this))
    .subscribe(data => {
      console.log(data)
      this.toasterService.showSuccess('Moment Updated')
      this.router.navigate(['all-moments'])
    })
  }
  
  
}
