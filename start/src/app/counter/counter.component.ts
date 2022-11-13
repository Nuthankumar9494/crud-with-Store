import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/app.state';
import { decrement, increment, reset,custom } from './counter.action';
import { getcounter } from './counter.selector';
import { counterstate } from './counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 counter:any;
 value:any;
  constructor(private store:Store<Appstate>) { }

  ngOnInit(): void {
    this.store.select(getcounter).subscribe((data)=>{
      this.counter=data;
    })
  }
  onincre(){
   this.store.dispatch(increment());
  }
  ondec(){
this.store.dispatch(decrement());
  }
  onres(){
  this.store.dispatch(reset());
  }
  custom(){
    this.store.dispatch(custom({counter:Number(this.value)}));
  }

}
