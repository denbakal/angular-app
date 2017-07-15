import {CarService} from "../../app/shared/car.service";
import {inject, TestBed} from "@angular/core/testing";
import {EngineService} from "../../app/shared/engine.service";

describe('Car', () => {
  let subject: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineService, CarService]
    });

    spyOn(EngineService.prototype, 'getHorsepower').and.returnValue(400);
    spyOn(EngineService.prototype, 'getName').and.returnValue('V8 engine');
  });

  beforeEach(inject([CarService], (car: CarService) => {
    subject = car;
  }));

  it('should display name with engine', () => {
    // expect(subject.getName()).toEqual('Car with Basic engine(150 HP)');
    expect(subject.getName()).toEqual('Car with V8 engine(400 HP)');
  });
});
