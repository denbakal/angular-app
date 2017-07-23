import {BannerAsyncComponent} from "./banner-async.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('BannerAsyncComponent (external template - templateUrl)', () => {
  let comp: BannerAsyncComponent;
  let fixture: ComponentFixture<BannerAsyncComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerAsyncComponent], // declare the test component
      /*
       * WebPack developers need not call compileComponents because it inlines templates
       * and css as part of the automated build process that precedes running the test.
       * */
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAsyncComponent);

    comp = fixture.componentInstance; // BannerAsyncComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});
