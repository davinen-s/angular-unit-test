import {TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {HeroService} from '../hero.service';
import {of} from 'rxjs/internal/observable/of';

describe('Heroes Component -advance (Shallow) Test', () => {

  let mockHeroService;
  let HEROES;
  let fixture;
  beforeEach(() => {

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    TestBed.configureTestingModule(
      {
        declarations: [HeroesComponent],
        providers: [
          {provide: HeroService, useValue: mockHeroService}
        ]
      }
    );

    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 35}
    ];

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    expect(fixture.componentInstance.heroes.length).toBe(3);

  });
});
