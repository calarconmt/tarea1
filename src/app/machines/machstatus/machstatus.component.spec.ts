import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachstatusComponent } from './machstatus.component';

describe('MachstatusComponent', () => {
  let component: MachstatusComponent;
  let fixture: ComponentFixture<MachstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
