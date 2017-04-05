import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  styleUrls: ['./zippy.component.css'],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading"
        (click)="isOpen = !isOpen">
        {{title}}
        <i class="pull-right glyphicon" 
          [ngClass]="{
            'glyphicon-chevron-up': isOpen,
            'glyphicon-chevron-down': !isOpen
          }"
        ></i>
      </div>
      
      <div [hidden]="!isOpen" class="panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ZippyComponent implements OnInit {

  @Input() title = 'Default title';
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
