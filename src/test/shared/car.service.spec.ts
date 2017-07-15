import {CarService} from "../../app/shared/car.service";
import {inject, TestBed} from "@angular/core/testing";
import {EngineService} from "../../app/shared/engine.service";

describe('Car', () => {
  let subject: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineService, CarService]
    });
  });

  beforeEach(inject([CarService], (car: CarService) => {
    subject = car;
  }));

  it('should display name with engine', () => {
    expect(subject.getName()).toEqual('Cat with Basic engine(150 HP)');
  });
});
