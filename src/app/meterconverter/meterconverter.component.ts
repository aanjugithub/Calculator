import { Component } from '@angular/core';

@Component({
  selector: 'app-meterconverter',
  templateUrl: './meterconverter.component.html',
  styleUrls: ['./meterconverter.component.css']
})
export class MeterconverterComponent {
  meter: number = 0;
  centimeter: number = 0;

  performMetertocmconversion() {
    this.centimeter = this.meter * 100;
  }

  performCentimetertomconversion() {
    this.meter = this.centimeter / 100;
  }
}
