import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerlistComponent } from './entitylist.component';

describe('TrackerlistComponent', () => {
  let component: TrackerlistComponent;
  let fixture: ComponentFixture<TrackerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
