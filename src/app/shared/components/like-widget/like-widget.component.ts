import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss']
})
export class LikeWidgeComponent implements OnInit {
  // toda a vez que o botão for clicado, o evento vai ser disparado
  @Output() public liked = new EventEmitter<void>();
  // mostrar numero atual de curtidas
  @Input() public likes = 0;
  // passar id como parâmetro, mas se nao for passado tem que ser gerado dinâmicamente
  @Input() public id = null;

  public fonts = { faThumbsUp };

  constructor(private uniqueIdService: UniqueIdService) {}

  public ngOnInit(): void {
    if(!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
