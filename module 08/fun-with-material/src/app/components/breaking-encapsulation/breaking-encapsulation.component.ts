import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-breaking-encapsulation',
  templateUrl: './breaking-encapsulation.component.html',
  styleUrls: ['./breaking-encapsulation.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class BreakingEncapsulationComponent {

}
