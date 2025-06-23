import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderchildComponent } from './headerchild.component';

describe('HeaderchildComponent', () => {
  let component: HeaderchildComponent;
  let fixture: ComponentFixture<HeaderchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
