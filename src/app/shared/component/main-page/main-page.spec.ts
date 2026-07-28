import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage } from './main-page';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render existing comments', () => {
    fixture.detectChanges();

    const comments = fixture.nativeElement.querySelectorAll('.comments li');

    expect(comments.length).toBe(2);
    expect(comments[0].textContent).toContain('Was für eine schöne Aussicht!');
  });

  it('should add a comment to the correct post', () => {
    fixture.detectChanges();
    const firstPost = fixture.nativeElement.querySelector(
      'app-single-post',
    ) as HTMLElement;
    const input = firstPost.querySelector('input') as HTMLInputElement;
    const form = firstPost.querySelector('form') as HTMLFormElement;

    input.value = 'Mein neuer Kommentar';
    input.dispatchEvent(new Event('input'));
    form.dispatchEvent(new SubmitEvent('submit'));
    fixture.detectChanges();

    expect(component.posts()[0].comments).toContain('Mein neuer Kommentar');
    expect(firstPost.textContent).toContain('Mein neuer Kommentar');
    expect(input.value).toBe('');
  });
});
