import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgeComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgeComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgeComponent> = null;
  let component: LikeWidgeComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgeComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgeComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
  })
});
