import game, { handleUserAction } from "./gameState";
import { TICKRATE } from "./constants";
import initButtons from "./buttons";

function init() {
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimation() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICKRATE;
    }
    requestAnimationFrame(nextAnimation);
  }
  requestAnimationFrame(nextAnimation);
}

init();
