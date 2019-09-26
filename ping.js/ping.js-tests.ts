import Ping from "ping.js";

const ping = new Ping();

let z: string | number;

ping.ping("https://github.com", (x: string, y: string | number) => {
  z = y || x
});