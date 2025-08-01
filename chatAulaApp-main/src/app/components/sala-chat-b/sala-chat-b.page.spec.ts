import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaChatBPage } from './sala-chat-b.page';

describe('SalaChatBPage', () => {
  let component: SalaChatBPage;
  let fixture: ComponentFixture<SalaChatBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalaChatBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
