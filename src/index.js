import { createHeroes, getHeroes } from "./heroes-service.js";
import { renderHeroes, renderHeroCount } from "./render.js";

async function init() {
  const heroes = await getHeroes();
  const heroesContainer = document.querySelector("main");

  renderHeroes(createHeroes(heroes), heroesContainer);
  renderHeroCount(heroes.length);
}

init();
