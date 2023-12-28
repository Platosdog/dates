import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDisplayComponent } from './container-display.component';

describe('ContainerDisplayComponent', () => {
  let component: ContainerDisplayComponent;
  let fixture: ComponentFixture<ContainerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerDisplayComponent]
    });
    fixture = TestBed.createComponent(ContainerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
