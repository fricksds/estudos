import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService){}

  transferir(): void {
    console.log('Solicitada nova transferência');

    this.service.adicionar({valor: this.valor, destino: this.destino}).subscribe(response =>{
      this.limparCampos();
    }, error => {
      console.error(error);
    });
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
