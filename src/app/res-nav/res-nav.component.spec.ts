
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResNavComponent } from './res-nav.component';

describe('ResNavComponent', () => {
  let component: ResNavComponent;
  let fixture: ComponentFixture<ResNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
