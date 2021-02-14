import { Spy, spy } from "https://deno.land/x/mock@v0.9.4/spy.ts";
import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";

Deno.test("getHealthStatus() returns ok", () => {
  const appService = new AppService();
  const controller = new AppController(appService);

  const getGreetingSpy = spy(appService, "getGreeting");

  controller.index();

  assertEquals(getGreetingSpy.calls.length, 1);
});
