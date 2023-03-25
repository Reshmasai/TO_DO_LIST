import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput!: string;
  public searchArray=this.taskService.allLists;
  constructor(public taskService:TaskServiceService,private location:Location,private router:Router){}
  ngOnInit(): void {
    console.log()
  }
  back(){
    this.location.back();
  }
  
}
