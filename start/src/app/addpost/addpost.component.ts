import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { post } from '../post/models/post.model';
import { addpost } from '../post/post.action';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
 addform!:FormGroup;
  constructor(private route:Router,private store: Store) { }

  ngOnInit(): void {
    this.addform=new FormGroup({
      Name:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      Designation:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
    
  }
  onclick(){
     const Post:post={
      Name:this.addform.value.Name,
      Designation:this.addform.value.Designation,
     };
     this.store.dispatch(addpost({Post}))
      this.route.navigateByUrl('/post')
  }

}
