import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
      changeStyles={};
      changeStylesMain={};


      closeNav() {
        console.log("hello world")
        this.changeStyles={
          width:'0'
        }
        this.changeStylesMain={
          marginLeft:'0'
        }

      }

      openNav() {
        console.log("hi Nav is open")
        this.changeStyles={
          width:'250px'
        }
        this.changeStylesMain={
          marginLeft:'250px'
        }
      }
  }    
