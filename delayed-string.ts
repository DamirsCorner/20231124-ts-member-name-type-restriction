export class DelayedStringFactory {
  public stringPromise1: Promise<string> | undefined;
  public stringPromise2: Promise<string> | undefined;
  public numberPromise: Promise<number> | undefined;

  private getOrCreateStringPromise(
    backingField: keyof DelayedStringFactory,
    delay: number,
    value: string
  ): Promise<string> {
    const promise =
      this[backingField] ??
      new Promise<string>((resolve, _) => {
        setTimeout(() => resolve(value), delay);
      });
    this[backingField] = promise;
    return promise;
  }

  public getOrCreateStringPromise1(
    delay: number,
    value: string
  ): Promise<string> {
    return this.getOrCreateStringPromise("stringPromise1", delay, value);
  }

  public getOrCreateStringPromise2(
    delay: number,
    value: string
  ): Promise<string> {
    return this.getOrCreateStringPromise("stringPromise2", delay, value);
  }
}
