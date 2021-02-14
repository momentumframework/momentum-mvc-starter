import { AppService } from "./app.service.ts";
import { Controller, Get, View } from "./deps.ts";

@Controller("")
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  @View("index")
  index() {
    return this.appService.getGreeting();
  }
}
