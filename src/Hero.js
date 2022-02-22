export class Hero {
  #powerCount;

  constructor(name, powerCount = 10) {
    this.name = name;
    this.#powerCount = powerCount;
  }

  get powerCount() {
    return this.#powerCount;
  }

  train() {
    this.#powerCount += 1;
  }
}
