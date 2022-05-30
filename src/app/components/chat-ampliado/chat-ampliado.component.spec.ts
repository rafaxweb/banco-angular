import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAmpliadoComponent } from './chat-ampliado.component';

describe('ChatAmpliadoComponent', () => {
  let component: ChatAmpliadoComponent;
  let fixture: ComponentFixture<ChatAmpliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAmpliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAmpliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
