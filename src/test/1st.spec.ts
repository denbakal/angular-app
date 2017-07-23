import {async} from "@angular/core/testing";

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});


describe('asynchronous test', () => {
  it('should be executed like asynchronous', async(() => {
    setTimeout(() => {
      expect(true).toBe(true);
    }, 2000);
  }));
});
