import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  {path:' ',component:NavbarComponent},
  {path:'showTasks/:name',component:ShowTasksComponent},
  {path:'addTask/:item',component:AddTaskComponent},
  {path:'search',component:SearchComponent},
  {path:'create',component:CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
