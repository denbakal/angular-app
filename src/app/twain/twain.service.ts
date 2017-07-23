import {Injectable} from '@angular/core';

@Injectable()
export class TwainService {

  constructor() {
  }

  getQuote(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('result');
    });
  }
}
