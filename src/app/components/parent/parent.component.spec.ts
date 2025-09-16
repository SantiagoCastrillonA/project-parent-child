import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send task to child component', () => {
    component.task = 'Test Task';
    component.sendTask();
    expect(component.task).toBe('Test Task');
  });

  it('should update message when task is completed', () => {
    component.task = 'Test Task';
    component.sendTask();
    component.child.markAsCompleted();
    expect(component.message).toBe('Tarea completada: Test Task');
  });
});