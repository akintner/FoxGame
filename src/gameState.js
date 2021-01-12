const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    }
    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  handleUserAction(icon) {
    console.log(icon);
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      //do nothing
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  wake() {
    console.log("woke, bro");
    this.current = "IDILING";
    this.wakeTme = -1;
  },
  changeWeather() {},
  cleanPoop() {},
  feed() {},
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
