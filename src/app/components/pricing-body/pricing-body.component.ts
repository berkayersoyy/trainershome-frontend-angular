import { Component, OnInit } from '@angular/core';
import {faCheck,faTimes} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pricing-body',
  templateUrl: './pricing-body.component.html',
  styleUrls: ['./pricing-body.component.css']
})
export class PricingBodyComponent implements OnInit {

  faCheck = faCheck
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
