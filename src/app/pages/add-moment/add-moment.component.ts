import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MomentServiceService } from '../../services/moment-service.service'
import { ToasterService } from 'src/app/services/toaster.service';

export interface Tag {
  name: string;
}

@UntilDestroy()


@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.scss']
})
export class AddMomentComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: string[]  = [

  ];

  img: any;
  img_formdata: any;
  imageSrc: any;


  constructor(public authenticationSerice: AuthenticationService, public fb: FormBuilder, public userService: UserService, public router: Router,
    private http: HttpClient, public momentServiceService: MomentServiceService, public toasterService : ToasterService) { }


  get image_url() {
    return this.momentForm.get('image_url')
  }

  get comment() {
    return this.momentForm.get('comment')
  }

  get file() {
    return this.momentForm.get('file')
  }

  momentForm = this.fb.group({
    image_url: [''],
    file: [''],
    comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],

  })

  ngOnInit(): void {
  }

  logout() {
    console.log('cliked')
    this.authenticationSerice.logout()
  }

  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      this.img_formdata = file

      reader.onload = () => {
   
        this.imageSrc = reader.result as string;   
      };
   
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push( value.trim() );
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  add_moment(form) {


    console.log(form)
    console.log(this.tags)
    console.log('add')


    if (!this.img_formdata) {
      alert("image is required")
    }

    else {
      const formData = new FormData();
      formData.append('photo', this.img_formdata)
      this.http.post('http://localhost:4000/api/upload', formData  )
      .pipe(untilDestroyed(this))
      .subscribe((data : any) => {
        console.log(data)
        if(data.error) {
          alert('Only images are allowed')
        }
        else {
          console.log(data.filename)
          this.img = 'http://localhost:4000/images/' + data.filename
          let values = {
            comment : this.comment?.value,
            image_url : this.img,
            tags : this.tags,
            user : localStorage.getItem('user_id')
  
          }
          this.momentServiceService.add_moment(values)
          .pipe(untilDestroyed(this))
          .subscribe(x => {
            console.log(x)
            this.toasterService.showSuccess("Moemnt added successfully!!")
          })

        }        
      })

    }
  
    
  }

  
 
}
