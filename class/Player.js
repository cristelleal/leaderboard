export default class Player {
  constructor(firstName, lastName, country, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

    this.setScore(score);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setScore(newScore) {
    if (newScore < 0 || newScore > 100) {
      throw new Error('The score must be between 0 and 100');
    }

    if (typeof newScore === 'string') {
      this.score = parseInt(newScore, 10);
    } else {
      this.score = newScore;
    }
  }

  increaseScore() {
    this.score += 5;
  }

  decreaseScore() {
    this.score -= 5;
  }
}
