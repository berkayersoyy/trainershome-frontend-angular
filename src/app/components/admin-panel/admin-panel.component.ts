import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    this.destroyNavbar();
  }
  ngOnDestroy():void{
    this.buildNavbar();
  }

  destroyNavbar(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.style.setProperty("display","none");
  }
  buildNavbar(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.style.setProperty("display","block");
  }
}
