// Type definitions for ping.js 0.2.3
// Project: https://github.com/alfg/ping.js
// Definitions by: Jacob Colvin <https://github.com/MacroPower>

type opt = {favicon?: string, timeout?: number}

declare class Ping {
  constructor(opt?: opt);
  ping(source: string, callback: (err: string, data: string | number) => void): void;
}

declare module "ping.js" {
  export = Ping;
}