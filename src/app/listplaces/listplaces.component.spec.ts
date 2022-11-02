import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplacesComponent } from './listplaces.component';

describe('ListplacesComponent', () => {
  let component: ListplacesComponent;
  let fixture: ComponentFixture<ListplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
