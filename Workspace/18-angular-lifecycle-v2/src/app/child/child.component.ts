import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log("Child component OnDestroy called....");
  }
  ngOnInit(): void {
    console.log("Child component OnInit called....");
  }
  
}
