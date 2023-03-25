import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  show:boolean=false;
  isAllList:boolean=false;
  isFinished:boolean=false;
  isHover:boolean=false;
  inputValue!:string;
  index:any;
  nameItem!:string;
  dataList:any[]=[];
  namesList:any[]=[];
  dateList:any[]=[];
 
  constructor(private router:Router,private taskService:TaskServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('item')
    this.nameItem =this.taskService.nameList[this.index];

    if(this.nameItem ==='alllists') {
      this.dataList=this.taskService.dataList;
      this.dateList=this.taskService.dateList;
      this.isAllList =true;
    }
    else {
      this.dataList=this.taskService.dataList[this.index];
      this.dateList=this.taskService.dateList[this.index];
      
    }
    if(this.nameItem==='finished'){
      this.isFinished=true;
    }
    this.namesList=this.taskService.nameList;
  }
  onKey(event:any){
    this.inputValue= event.target.value;
    if(this.inputValue){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }

  fn(){
    if(this.nameItem ==='alllists'){
      const defIndex=this.taskService.nameList.indexOf('default')
      this.taskService.dataList[defIndex].push(this.inputValue)
      this.taskService.dateList[defIndex].push('na')
      this.taskService.allLists.push(this.inputValue)
    }
    else{
      this.taskService.dataList[this.index].push(this.inputValue)
      this.taskService.dateList[this.index].push('na')
      this.taskService.allLists.push(this.inputValue)
    }
  }
  
  
  checkOrUncheck(val:string,itemIndex:number,listIndex:number){
    const nameIndex=this.taskService.nameList.indexOf('finished')
    console.log(nameIndex);
    this.taskService.dataList[nameIndex].push(val);
    this.delete(itemIndex,listIndex);
  }

  showDelete(){
    this.isHover = true;
  }
  hideDelete(){
    this.isHover=false;
  }
  delete(itemIndex:number,listIndex:number){
    if(this.nameItem ==='alllists'){
      this.taskService.dataList[listIndex].splice(itemIndex,1);
    }
    else {
      this.taskService.dataList[this.index].splice(itemIndex,1);
    }
  }
  
}
