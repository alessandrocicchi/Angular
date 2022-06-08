import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasiExampleComponent } from './table-basi-example.component';

describe('TableBasiExampleComponent', () => {
  let component: TableBasiExampleComponent;
  let fixture: ComponentFixture<TableBasiExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBasiExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
