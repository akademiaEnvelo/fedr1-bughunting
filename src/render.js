export const renderHeroes = (heroes, heroesContainer) => {
  heroes.forEach((hero) => {
    const heroElement = document.createElement("div");
    heroElement.classList.add("hero__item");

    const { name, powerCount } = hero;
    const nameElement = document.createElement("p");
    const powerCountElement = document.createElement("p");
    const powerUpButton = document.createElement("button");

    nameElement.innerText = name;
    powerCountElement.innerText = powerCount;
    powerUpButton.innerText = `Power up ${name}`;

    powerUpButton.addEventListener("click", () => {
      hero.train();
      powerCountElement.innerText = hero.powerCount;
    });

    heroElement.append(nameElement, powerCountElement, powerUpButton);
    heroesContainer.append(heroElement);
  });
};

export function renderHeroCount(heroCount) {
  document.querySelector(".heroes__hero--counter").innerText = heroCount;
}
