// klasa hero do oddzielnego modułu
class Hero {
  #powerCount = 10;

  // w konstrukturze powinna znaleźć się opcja dodania inicjalnej wartości "powerCount"
  // a wartość 10 zostawić jako wartość domyślną
  constructor(name) {
    this.name = name;
  }

  // wystarczy zastosować zwykły get powerCount()
  getCurrentPowerCount() {
    return this.#powerCount;
  }

  // metoda nie nadpisuje wartości powerCount
  train() {
    this.#powerCount + 1;
  }
}

// zbędne zmianna, mamy heroCount dostępne w length tablicy z bohaterami
let heroCount = 0;

// tablica z bohaterami powinna być inicjalizowana z metody, z zewnętrznego modułu
// metoda ta powinna być asynchroniczna by mockować pobranie danych z zewnątrz
const heroes = [];

// tworzenie bohaterów powinno zachodzić na podstawie zmockowanych danych w oddzielnej metodzie
// najlepiej w oddzielnym module
// gdy już deklaruje zmienne w ten sposób, tutaj lepiej użyć const zamiast let
let hero = gethero("hulk");
let geralt = gethero("geralt");

heroes.push(hero);
heroes.push(geralt);

// wywołanie przed deklaracją
print_hall_of_fame();

// funkcja powinna być w oddzielnym module
// powinnien być zastosowany camelCase
// dodatkowo funkcja powinna przyjmować argumenty, jak nazwa i powerCount
function gethero() {
  // zwiększanie nie potrzebne
  heroCount++;

  // można od razu zwrocić stworzoną instancje klasy Hero
  let hero = new Hero("hulk");
}

// powinien być zastosowany camelCase
// metoda powinna być w oddzielnym module, a tutaj tylko wywoływana
const print_hall_of_fame = () => {
  // dodawania nowego bohatera nie powinno mieć miejsca w tej funkcji
  // dodatkowo wywołujemy gethero ze zmienną która nie została nigdzie zainicjalizowana, rzuci błędem
  let spiderman = gethero(spider);
  heroes.push(spiderman);

  // brak elementu o id div w html
  const heroesContainer = document.querySelector("#div");

  // niepotrzebne użycie mapowania, zalecany forEach lub pętla
  // tablica po której iterujemy powinna być przekazana jako parametr do metody
  // zmienne i, arr nie są użyte, nie powinny być zadeklarowane
  // zmienna x powinna sugerować jaką niesie wartość, w tym wypadku -> hero byłby lepszą nazwą
  heroes.map((x, i, arr) => {
    const heroElement = document.createElement("div");
    // destrukturyzacja obiektu powinna odbywaćsię przez { } a noe []
    const [name] = x;

    // błędne odniesienie się do zmiennej prywatnej
    // zamiast nadpisywania innerHTML powinniśmy stworzyć dwa elementy p, przekazać im odpowiedni
    // tekst a następnie wrzucić do elementu heroElement
    heroElement.innerHTML = `<p>${name}</p>${x.#powerCount}</p>`;

    // brakuje też tutaj dodania przycisku zwiększającego moc odpowiedniego bohatera

    heroesContainer.append(heroElement);
  });
};
