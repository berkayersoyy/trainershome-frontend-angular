import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) 
  onScroll() {
    if(window.innerWidth>991){
      if (window.scrollY > 50) {
        document.getElementsByClassName('navbar')[0].classList.add('stable');
      } else {
        document.getElementsByClassName('navbar')[0].classList.remove('stable');
      }
    }else{
      document.getElementsByClassName('navbar')[0].classList.remove('stable');
    }
  }
}
