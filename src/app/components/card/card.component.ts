import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string = 'Título do Card';
  @Input() descricao: string = 'Descrição do Card';
  @Input() imagem: string = './img/silhueta.jpg';

}
