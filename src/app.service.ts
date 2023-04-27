import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {"saludo": "Hello word"};
  }
  getHola(): any{
    return {"saludo": "Hola Mundo"};
  }

}
