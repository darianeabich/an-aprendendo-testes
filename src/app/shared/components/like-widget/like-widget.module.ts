import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgeComponent } from './like-widget.component';

@NgModule({
  declarations: [
    LikeWidgeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    LikeWidgeComponent
  ],
  providers: [
    UniqueIdService,
  ]
})
export class LikeWidgetModule {}
