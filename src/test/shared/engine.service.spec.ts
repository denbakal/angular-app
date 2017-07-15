import {EngineService} from "../../app/shared/engine.service";

describe('Engine', () => {
  let subject: EngineService;

  beforeEach(() => {
    subject = new EngineService();
  });

  it('should return it\'s horsepower', () => {
    expect(subject.getHorsepower()).toEqual(150);
  });

  it('should return it\'s name', () => {
    expect(subject.getName()).toEqual('Basic engine');
  })
});
