import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! NESTJS';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      mome: 'Angelica'
    }
    return objeto
  }
}
