import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

class MockTest {
  getComments() {
    return Observable.of('Test3');
  }
}
describe('AppComponent', () => {
  let mockTest;
  beforeEach(async(() => {
    mockTest = new MockTest();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TestService, useValue: mockTest }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(mockTest, 'getComments');
    app.ngOnInit();
    expect(app).toBeTruthy();
  }));

  /*it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/
});
