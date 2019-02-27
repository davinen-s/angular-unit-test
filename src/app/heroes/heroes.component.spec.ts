import {HeroesComponent} from './heroes.component';
import {throwMultipleComponentError} from '@angular/core/src/render3/errors';
import {of} from 'rxjs/internal/observable/of';

describe('Heroes Component', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDUde', strength: 8},
      {id: 1, name: 'Wonderful WOman', strength: 24},
      {id: 1, name: 'SuperDude', strength: 55}
    ];

    // creating a mock object with jasmine while indicating mock method to be added to the mocked service object.
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    // we inject the mocked service in the component to be tested.
    component = new HeroesComponent(mockHeroService);
  });

  it('should remove the indicated hero from the heroes list', () => {

    // mocking the  method from the mocked service to return an observable.
    mockHeroService.deleteHero.and.returnValue(of(true));

    component.heroes = HEROES;

    component.delete(HEROES[2]);

    expect(component.heroes.length).toBe(2);
  });

  it('should call deleteHero', () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    component.delete(HEROES[2]);

    // High level assert that method has been called.
    expect(mockHeroService.deleteHero).toHaveBeenCalled();

    // Deep Assertion, verifying whether the method has been called with a specific argument.
    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  });
});
