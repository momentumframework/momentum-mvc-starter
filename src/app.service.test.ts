import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { AppService } from "./app.service.ts";

// Simple name and function, compact form, but not configurable
Deno.test("getGreeting() returns message", () => {
  const greeting = new AppService().getGreeting();

  assertEquals(greeting, { message: "Hello Momentum!" });
});
