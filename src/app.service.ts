import { Injectable } from "./deps.ts";

@Injectable({ global: false })
export class AppService {
  getGreeting() {
    return { message: "Hello Momentum!" };
  }
}
