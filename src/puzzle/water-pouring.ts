function solveWaterPouring({
  jugCapacities,
  targetQuantity
}: {
  jugCapacities: number[];
  targetQuantity: number;
}) {
  const jugs: Jug[] = jugCapacities.map(capacity => ({ capacity }));
  const queue = new Queue();
  const found = [];

  queue.enqueue(State.fromJugs(jugs));

  while (queue.length > 0) {
    const state = queue.dequeue();

    if (state.isAnyJugsContain(targetQuantity)) {
      found.push(state);

      continue;
    }

    for (const manipulation of state.nextManipulations) {
      queue.enqueue(state.manipulate(manipulation));
    }
  }

  return found;
}

class Queue {
  constructor() {
    this.array = [];
    this.duplicates = [];
  }

  private readonly array: State[];

  private readonly duplicates: State[];

  enqueue(state: State): void {
    if (this.duplicates.some(st => st.isSameQuantityWith(state))) {
      return;
    }

    this.array.push(state);
    this.duplicates.push(state);
  }

  dequeue(): State {
    if (this.array.length === 0) {
      throw new Error();
    }

    return this.array.shift()!;
  }

  get length() {
    return this.array.length;
  }
}

class State {
  constructor({
    quantities,
    manipulationLogs
  }: {
    quantities: Map<Jug, number>;
    manipulationLogs: Manipulation[];
  }) {
    this.quantities = quantities;
    this.manipulationLogs = manipulationLogs;
  }

  quantities: Map<Jug, number>;

  manipulationLogs: Manipulation[];

  get nextManipulations(): Manipulation[] {
    const nextManipulations: Manipulation[] = [];

    for (const [jug, quantity] of this.quantities.entries()) {
      if (quantity < jug.capacity) {
        nextManipulations.push({
          type: ManipulationType.fillUp,
          hero: jug
        });
      }

      if (quantity > 0) {
        nextManipulations.push({
          type: ManipulationType.dumpOut,
          hero: jug
        });

        for (const [otherJug, otherJugQuantity] of this.quantities.entries()) {
          if (otherJug === jug) {
            continue;
          }

          if (otherJugQuantity < otherJug.capacity) {
            nextManipulations.push({
              type: ManipulationType.transfer,
              hero: jug,
              opponent: otherJug
            });
          }
        }
      }
    }

    return nextManipulations;
  }

  manipulate(manipulation: Manipulation): State {
    const quantities = new Map(this.quantities);

    if (manipulation.type === ManipulationType.transfer) {
      const opponent = manipulation.opponent!;
      const heroQuantity = this.quantities.get(manipulation.hero)!;
      const opponentQuantity = this.quantities.get(manipulation.opponent!)!;
      const opponentRoom = opponent.capacity - opponentQuantity;
      const remaining =
        heroQuantity - opponentRoom > 0 ? heroQuantity - opponentRoom : 0;

      quantities.set(manipulation.hero, remaining);
      quantities.set(opponent, opponentQuantity + heroQuantity - remaining);
    }

    if (manipulation.type === ManipulationType.fillUp) {
      quantities.set(manipulation.hero, manipulation.hero.capacity);
    }

    if (manipulation.type === ManipulationType.dumpOut) {
      quantities.set(manipulation.hero, 0);
    }

    return new State({
      quantities,
      manipulationLogs: [...this.manipulationLogs, manipulation]
    });
  }

  isSameQuantityWith(state: State): boolean {
    for (const [jug, quantity] of this.quantities.entries()) {
      if (state.quantities.get(jug) !== quantity) {
        return false;
      }
    }

    return true;
  }

  isAnyJugsContain(quantity: number) {
    return Array.from(this.quantities.values()).some(q => q === quantity);
  }

  static fromJugs(jugs: Jug[]): State {
    return new State({
      quantities: new Map(jugs.map(jug => [jug, 0]) as [Jug, number][]),
      manipulationLogs: []
    });
  }
}

export interface Jug {
  readonly capacity: number;
}

export interface Manipulation {
  readonly type: ManipulationType;
  readonly hero: Jug;
  readonly opponent?: Jug;
}

export enum ManipulationType {
  fillUp,
  dumpOut,
  transfer
}

export default solveWaterPouring;
