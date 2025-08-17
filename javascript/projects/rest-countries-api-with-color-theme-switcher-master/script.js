const countriesContainer = document.querySelector(".countries-container");

// const anchor = document.createElement("a")
// countriesContainer.appendChild(anchor)

// const card = document.createElement("div")
// card.classList.add("card")
// anchor.appendChild(card)

// const imgContainer = document.createElement("div")
// imgContainer.classList.add("img-container")
// card.appendChild(imgContainer)

// const img = document.createElement("img")
// img.src =
// imgContainer.appendChild(img)

// this way is too lengthy

// shorter way

// shimmer
// insert shimmer placeholders before fetch
for (let i = 0; i < 6; i++) {
  countriesContainer.innerHTML += `
    <div class="card shimmer-card">
      <div class="img-container shimmer"></div>
      <div class="info-container">
        <p class="country-name shimmer shimmer-text"></p>
        <div class="stats">
          <p class="shimmer shimmer-text"></p>
          <p class="shimmer shimmer-text"></p>
          <p class="shimmer shimmer-text"></p>
        </div>
      </div>
    </div>`;
}

function getCountries(data) {
  data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.href = `./country.html?name=${country.name.common}`;
      countryCard.innerHTML = `<div class="card">
            <div class="img-container">
              <img src=${country.flags.svg} alt="img" />
            </div>
            <div class="info-container">
              <p class="country-name">${country.name.common}</p>
              <div class="stats">
                <p><b>Population:</b>&nbsp;${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region:</b><span>&nbsp;</span><span class="region">${country.region}</span></p>
                <p><b>Capital:</b>&nbsp;${country.capital[0] ? country.capital[0] : "N/A"}</p>
              </div>
            </div>
          </div>`;

      countriesContainer.appendChild(countryCard);
    });
}

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"
)
  .then((res) => res.json())
  .then((data) => {
    countriesContainer.innerHTML = ""; // remove shimmers
    // console.log(data);

    getCountries(data);

    
  });

  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.trim().toLowerCase();
    const countryCards = document.querySelectorAll(".card");

    countryCards.forEach((card) => {
      const countryName = card.querySelector(".country-name").textContent.toLowerCase();
      if (countryName.includes(searchText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  })

  const filter = document.querySelector(".filter");

  filter.addEventListener("change", (e) => {
    const selectedRegionInFilter = e.target.value.toLowerCase();

    fetch(
  `https://restcountries.com/v3.1/region/${selectedRegionInFilter}`
)
  .then((res) => res.json())
  .then((data) => {
    countriesContainer.innerHTML = ""; 
    // console.log(data);
    getCountries(data);

    
  });

  })
