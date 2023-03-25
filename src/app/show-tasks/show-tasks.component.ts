import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {
  
  
  constructor(private route:ActivatedRoute,private router:Router,private taskService:TaskServiceService){

  }
  ngOnInit(): void {
    
    console.log(this.route.snapshot.paramMap.get('name'))
    const name= this.route.snapshot.paramMap.get('name')
    if (!this.taskService.nameList.includes(name)){
      this.taskService.nameList.push(name)
      this.taskService.dataList.push([])
      this.taskService.dateList.push([])
    }
    let index = this.taskService.nameList.indexOf(name)
    this.router.navigateByUrl(`/addTask/${index}`)
  }
  
}
