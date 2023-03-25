import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  nameList:any[]=['finished','default','personal','work','alllists'];
  dataList:any[]=[[],[],[],[],[]];
  dateList:any[]=[[],[],[],[],[]];
  allLists:any[]=[];
  constructor() { }


}
