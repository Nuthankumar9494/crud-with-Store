import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { CounterComponent } from './counter/counter.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [{path:'',component:CounterComponent},{path:'post',component:PostComponent},{path:'addpost',component:AddpostComponent},{path:'edit/:id',component:EditComponent},{path:'task',component:TaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
