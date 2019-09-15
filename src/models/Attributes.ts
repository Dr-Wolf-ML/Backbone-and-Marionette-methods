export class Attributes<T> {
  constructor(private data: T) {}

  // get a specific key of the data object
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  // get all props of the data object
  getAll = (): T => {
    return this.data;
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };
}
