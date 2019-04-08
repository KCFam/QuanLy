import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructingComponent } from './constructing.component';

describe('ConstructingComponent', () => {
  let component: ConstructingComponent;
  let fixture: ComponentFixture<ConstructingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
