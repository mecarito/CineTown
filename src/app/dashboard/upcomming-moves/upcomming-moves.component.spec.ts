import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingMovesComponent } from './upcomming-moves.component';

describe('UpcommingMovesComponent', () => {
  let component: UpcommingMovesComponent;
  let fixture: ComponentFixture<UpcommingMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
