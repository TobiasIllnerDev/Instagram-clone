import { TestBed } from '@angular/core/testing';
import { Subscribers } from './subscribers';

describe('Subscribers', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subscribers],
    }).compileComponents();
  });

  it('renders all subscribers and their following state', () => {
    const fixture = TestBed.createComponent(Subscribers);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('.subscriber-card')).toHaveLength(5);
    expect(element.textContent).toContain('Anna Müller');
    expect(element.textContent).toContain('Folgt dir nicht');
  });
});
