import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaChatAPage } from './sala-chat-a.page';

describe('SalaChatAPage', () => {
  let component: SalaChatAPage;
  let fixture: ComponentFixture<SalaChatAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalaChatAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
