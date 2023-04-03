import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const helloMessage = {
      "message": "Hello World!"
    }

    return JSON.stringify(helloMessage);
  }
}
