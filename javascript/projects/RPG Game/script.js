const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const typesContainer = document.getElementById("types");
const specialName = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");

searchButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const inputValue = searchInput.value.toLowerCase().trim();

  if (!inputValue) {
    alert("Creature not found.");

    return;
  }

  try {
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${inputValue}`
    );

    if (!response.ok) {
      throw new Error("Creature not found");
    }

    const data = await response.json();
    console.log(data);

    // Update text fields
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    height.textContent = `Height: ${data.height}`;
    weight.textContent = `Weight: ${data.weight}`;

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Update types
    typesContainer.innerHTML = "";
    data.types.forEach((type) => {
      const spanElement = document.createElement("span");
      spanElement.className = "type";
      spanElement.classList.add(type.name.toLowerCase());
      spanElement.textContent = type.name.toUpperCase();
      typesContainer.appendChild(spanElement);
    });

    specialName.textContent = data.special.name;
    specialDescription.textContent = data.special.description;
  } catch (error) {
    alert("Creature not found.");
    clearOutput();
  }

  searchInput.value = ""; // Clear input after search
});

// Helper function to clear the output
function clearOutput() {
  creatureName.textContent = "";
  creatureId.textContent = "";
  height.textContent = "";
  weight.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  typesContainer.innerHTML = "";
  specialName.textContent = "";
  specialDescription.textContent = "";
}
