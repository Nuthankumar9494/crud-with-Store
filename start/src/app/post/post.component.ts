import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Appstate } from '../store/app.state';
import { post } from './models/post.model';
import { deletepost } from './post.action';
import { getpost } from './post.selector';
import { poststate } from './post.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post:any;
  constructor(private store:Store<Appstate>) { }

  ngOnInit(): void {
    this.store.select(getpost).subscribe((data)=>{
      this.post=data;
    })
  }
  ondelete(id:string){
    confirm('AAre you sure you want to delet');
    this.store.dispatch(deletepost({id}));
  }


}
