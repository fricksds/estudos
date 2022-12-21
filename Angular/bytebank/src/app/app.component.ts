import { Component } from '@angular/core';
import { fromEvent, delay } from 'rxjs';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}

  transferir(event): void {
    console.log(event);
    this.service.adicionar(event);
  }
}
