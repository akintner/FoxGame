import gameState from "./gameState";

const TICKRATE = 7000;

function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  function nextAnimation() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICKRATE;
    }

    requestAnimationFrame(nextAnimation);
  }
  requestAnimationFrame(nextAnimation);
}

init();
