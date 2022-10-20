import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsSelectComponent } from './dogs-select.component';
describe('DogsSelectComponent', () => {
  let component: DogsSelectComponent;
  let fixture: ComponentFixture<DogsSelectComponent>;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [ DogsSelectComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render <h2> with a properly text', () => {
    const fixture = TestBed.createComponent(DogsSelectComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Tutaj mnie znajdziesz'
    );
  });

  it('should render select', () => {


    const fixture = TestBed.createComponent(DogsSelectComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('select'));


  });

  it('should render disabled option with properly text', () => {


    const fixture = TestBed.createComponent(DogsSelectComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('option')?.textContent).toContain('Wybierz mnie)'

    );
  });
});
