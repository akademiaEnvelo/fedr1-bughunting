import { Hero } from "./Hero.js";
import { mockedHeroesData } from "./heroes-mock-data.js";

export function createHeroes(heroesData) {
  return heroesData.map((hero) => new Hero(hero.name, hero.powerCount));
}

export function getHeroes() {
  // mock
  const randomDelayTime = Math.random * 3000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedHeroesData);
    }, randomDelayTime);
  });
}
