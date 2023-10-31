import { describe, expect, test } from "@jest/globals";
import { DelayedStringFactory } from "./delayed-string";

describe("Delayed string", () => {
  test("first factory should return a promise that resolves to the given string", async () => {
    const factory = new DelayedStringFactory();
    const promise = factory.getOrCreateStringPromise1(100, "Hello");
    const result = await promise;
    expect(result).toBe("Hello");
  });

  test("first factory should return the original promise when called again", async () => {
    const factory = new DelayedStringFactory();
    const promise1 = factory.getOrCreateStringPromise1(100, "Hello");
    const promise2 = factory.getOrCreateStringPromise1(100, "Goodbye");
    expect(promise2).toBe(promise1);
  });

  test("second factory should return a promise that resolves to the given string", async () => {
    const factory = new DelayedStringFactory();
    const promise = factory.getOrCreateStringPromise2(100, "Hello");
    const result = await promise;
    expect(result).toBe("Hello");
  });

  test("second factory should return the original promise when called again", async () => {
    const factory = new DelayedStringFactory();
    const promise1 = factory.getOrCreateStringPromise2(100, "Hello");
    const promise2 = factory.getOrCreateStringPromise2(100, "Goodbye");
    expect(promise2).toBe(promise1);
  });
});
