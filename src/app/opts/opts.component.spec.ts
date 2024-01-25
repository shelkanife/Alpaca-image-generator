import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptsComponent } from './opts.component';

describe('OptsComponent', () => {
  let component: OptsComponent;
  let fixture: ComponentFixture<OptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
