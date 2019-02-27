import {TestBed} from '@angular/core/testing';
import {HeroComponent} from './hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('HeroComponent', () => {


  let fixture;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });


    fixture = TestBed.createComponent(HeroComponent);

  });


  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};


    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name in an anchor tag using nativeElement', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

    fixture.detectChanges(); // trigger the data binding.

    // nativeElement return a classic javascript object.
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
  });
  it('should render the hero name in an anchor tag using debugElement', () => {
    fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};

    fixture.detectChanges(); // trigger the data binding.

    // debug element gives u more option like getting hold of directives... etc.
    const de = fixture.debugElement.query(By.css('a'));
    expect(de.nativeElement.textContent).toContain('SuperDude');
    // nativeElement return a classic javascript object.
  });


});
