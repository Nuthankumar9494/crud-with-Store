import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { post } from '../post/models/post.model';
import { updatepost } from '../post/post.action';
import { getpostByid } from '../post/post.selector';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 editform!:FormGroup;
 value:any;
  constructor(private route:ActivatedRoute,private store :Store,private router:Router
    ) { }

  ngOnInit(): void {
    
    let id=this.route.snapshot.params['id'];
    this.store.select(getpostByid,{id}).subscribe(data=>{
      this.value=data;
      
    });
    this.createfrom();
  }
  createfrom(){
    this.editform=new FormGroup({
      Name:new FormControl(this.value.Name,[]),
      Designation:new FormControl(this.value.Designation,[])
    });

  }
  onupdate(){
    const Name= this.editform.value.Name;
    const Designation=this.editform.value.Designation;
    const Post:post={
      id:this.value.id,
     Name,
     Designation
    }
     this.store.dispatch(updatepost({Post}));
    this.router.navigateByUrl('/post')
    console.log('hello');
    
  }


}
