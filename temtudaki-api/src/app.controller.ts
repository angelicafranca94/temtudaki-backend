import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('teste')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('objeto')
  getObject(): any {
    return this.appService.getObject();
  }
}
