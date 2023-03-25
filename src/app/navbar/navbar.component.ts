import { OnInit, Component,Input,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public searchArray=this.taskService.allLists;
  ele:any;
  showSide:boolean=false
  constructor(private router:Router,private taskService:TaskServiceService,private elementRef:ElementRef){}
    ngOnInit(): void {
      this.router.navigateByUrl('/showTasks/alllists')
    }
 
openModal(){
  const ele=document.getElementById('inpForm');
  console.log(ele)
  if(typeof ele!=='undefined' && ele!==null){
    ele.style.display="block";
  }
}
closeModal(){
  const ele=document.getElementById('inpForm');
  if(typeof ele!=='undefined' && ele!==null){
  ele.style.display="none";
}
}
createList(inp:any){

  const select=document.getElementById('lists');
  const lstOptn=document.getElementById('opt');
  const option=document.createElement('option');
  option.text=inp
  option.onclick=()=>{
    this.router.navigateByUrl(`/showTasks/${inp}`)
   }
  select?.insertBefore(option,lstOptn!);
  this.closeModal();
}
search(){
  this.router.navigateByUrl('/search')
}
openSidebar(){
  this.showSide=!this.showSide
}
frstClr(){
  document.body.style.backgroundColor="rgb(30, 47, 71)"
  this.showSide=!this.showSide
 }
scndClr(){
  document.body.style.backgroundColor="rgb(0, 62, 149)"
  this.showSide=!this.showSide
}
thirdClr(){
  document.body.style.backgroundColor="rgb(124, 179, 255)"
  this.showSide=!this.showSide
}
frthClr(){
  document.body.style.backgroundColor="rgb(0, 0, 0)"
  this.showSide=!this.showSide
}
fthClr(){document.body.style.backgroundColor="white"
this.showSide=!this.showSide
}
}
