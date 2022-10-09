import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddProdComponent } from './reactive-add-prod.component';

describe('ReactiveAddProdComponent', () => {
  let component: ReactiveAddProdComponent;
  let fixture: ComponentFixture<ReactiveAddProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveAddProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
