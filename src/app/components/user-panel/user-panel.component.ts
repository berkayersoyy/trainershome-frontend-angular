import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.destroyNavbar();
  }

  destroyNavbar(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.style.setProperty("display","none");
  }

}
