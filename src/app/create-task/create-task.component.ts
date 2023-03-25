import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  options:any
  constructor(private taskService:TaskServiceService,private router:Router){}
  ngOnInit(): void {
    this.taskService.nameList.forEach(x=>{
      this.options+="<option>"+x+"</option>";
    })
    console.log(this.options)
    let el=document.getElementById('list')
    el!.innerHTML=this.options;

  }
  index!:number;
  onSubmit(myData:any){
    const formData=myData.value
    console.log(formData)
    if(formData.list=='alllists')
    this.index=this.taskService.nameList.indexOf('default')
    else
    this.index=this.taskService.nameList.indexOf(formData.list)

    this.taskService.dataList[this.index].push(formData.task)
    this.taskService.dateList[this.index].push(formData.date)
    this.router.navigateByUrl(`/showTasks/${formData.list}`)
  }
}
