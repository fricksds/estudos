import { Component } from '@angular/core';
import { fromEvent, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir(event): void {
    console.log(event);
    this.transferencia = event;
  }
}
