import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { CreateTaskComponent } from './create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTaskComponent,
    ShowTasksComponent,
    SearchPipe,
    SearchComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
