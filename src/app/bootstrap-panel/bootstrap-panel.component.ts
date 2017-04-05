import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-panel',
  styleUrls: ['./bootstrap-panel.component.css'],
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">Heading</div>
      <div class="panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class BootstrapPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
