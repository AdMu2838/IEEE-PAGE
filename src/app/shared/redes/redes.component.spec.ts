import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesComponent } from './redes.component';

describe('RedesComponent', () => {
  let component: RedesComponent;
  let fixture: ComponentFixture<RedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesComponent]
    });
    fixture = TestBed.createComponent(RedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
