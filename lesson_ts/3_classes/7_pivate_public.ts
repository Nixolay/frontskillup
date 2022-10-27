class Car {
  public make: string;
  private damages: string[];
  private _model: string;
  protected run: number;
  #private: number; // private by js

  setPrivate(c: Car) {
    this.#private = c.#private;
  }

  set model(m: string) {
    this._model = m;
  }

  get model(): string {
    return this._model;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Car {
  // доступны поля из car: protected, public
  setRun(km: number) {
    this.run = km / 0.62;
  }
}
