import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import PDLJS from 'peopledatalabs';

const PDLJSClient = new PDLJS({ apiKey: "'blaaaaa'" });

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
