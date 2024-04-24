import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnDestroy {
  constructor() {
    console.log("Child Component ctor...");
  }
  ngOnDestroy(): void {
    console.log("Child Component OnDestroy called...");
  }
  ngOnInit(): void {
    console.log("Child Component OnInit called...");
  }
  
  
}
