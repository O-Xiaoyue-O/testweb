import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  next:string="assets/images/next.svg";
  last:string="assets/images/last.svg";
}
