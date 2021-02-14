import {
  MvcHandlebarsModule,
  MvcModule,
  MvModule,
  StaticFileModule,
} from "./deps.ts";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";

@MvModule({
  imports: [
    MvcModule.register({
      viewEngineModule: MvcHandlebarsModule,
    }),
    StaticFileModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
