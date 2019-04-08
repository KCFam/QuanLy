import { Component, OnInit, ViewChild } from '@angular/core';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-constructing',
  templateUrl: './constructing.component.html',
  styleUrls: ['./constructing.component.scss']
})
export class ConstructingComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad : SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWith': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

}
