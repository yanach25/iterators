export default class Team {
  constructor() {
    this.currentTeam = [];
  }

  add(person) {
    this.currentTeam.push(person);
  }

  [Symbol.iterator]() {
    let index = -1;
    const { currentTeam } = this;

    return {
      next: () => {
        index += 1;
        return { value: currentTeam[index], done: !(index in currentTeam) };
      },
    };
  }
}
