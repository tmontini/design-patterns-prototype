export default class Attack {
  constructor(public name: string, public power: number) {}

  public clone(): Attack {
    return new Attack(this.name, this.power)
  }
}