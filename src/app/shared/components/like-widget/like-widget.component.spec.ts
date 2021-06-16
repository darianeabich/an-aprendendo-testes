import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgeComponent } from './like-widget.component';

describe(LikeWidgeComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgeComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgeComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgeComponent);
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
})
