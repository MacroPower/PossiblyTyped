type Strategy = ByteLengthQueuingStrategy;

declare module "streamsaver" {
  const WritableStream: window.WritableStream; //| ponyfill.WritableStream

  function createWriteStream(
    filename: string,
    options?: {
      size?: number;
      pathname?: string;
      writableStrategy?: Strategy;
      readableStrategy?: Strategy;
    }
  ): WritableStream;
}
