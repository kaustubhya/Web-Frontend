const countryContainerDiv = document.querySelector(".country-container-div");

const params = new URLSearchParams(window.location.search);
const countryNameParam = params.get("name");

const backBtn = document.querySelector(".back-btn");
const homeBtn = document.querySelector(".home-btn");

function setPersistentButtonsLoading(loading = true) {
  [backBtn, homeBtn].forEach((btn) => {
    if (!btn) return;
    if (loading) btn.classList.add("shimmer", "shimmer-btn");
    else btn.classList.remove("shimmer", "shimmer-btn");
  });
}

countryContainerDiv.innerHTML = `
  <div class="country-page-flag-div shimmer"></div>
  <div class="country-details">
    <h1 class="shimmer shimmer-title"></h1>
    <div class="country-stats">
      <div class="stats-1 shimmer">
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
      </div>
      <div class="stats-2">
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
        <p class="shimmer shimmer-text"></p>
      </div>
    </div>
    <div class="border-countries">
      <span class="stat-head"></span>
      <div class="border-country-btns">
        <button class="country-btn shimmer" style="width:100px;height:36px"></button>
        <button class="country-btn shimmer" style="width:120px;height:36px"></button>
        <button class="country-btn shimmer" style="width:90px;height:36px"></button>
      </div>
    </div>
  </div>
`;

setPersistentButtonsLoading(true);

if (countryNameParam) {
  // debugger;
  fetch(`https://restcountries.com/v3.1/name/${countryNameParam}?fullText=true`)
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then((data) => {
      console.log(data);

      const country = data[0];

      let nativeName = "N/A";
      if (country.name?.nativeName) {
        nativeName = Object.values(country.name.nativeName)
          .map((name) => name.common)
          .join(", ");
      }

      let languages = "N/A";
      if (country.languages) {
        languages = Object.values(country.languages).join(", ");
      }

      let currency = "N/A";
      if (country.currencies) {
        currency = Object.values(country.currencies)
          .map((curr) => curr.name)
          .join(", ");
      }

      let capital = "N/A";
      if (country.capital) {
        capital = country.capital.join(", ");
      }

      countryContainerDiv.innerHTML = `
        <div class="country-page-flag-div shimmer shimmer-flag">
          <img src="${country.flags.svg}" alt="flag img" />
        </div>
        <div class="country-details">
          <h1>${country.name.common}</h1>
          <div class="country-stats">
            <div class="stats-1">
              <div>
                <span class="stat-head">Native Name: </span>
                <span class="stat-body">${nativeName}</span>
              </div>
              <div>
                <span class="stat-head">Population: </span>
                <span class="stat-body">${country.population.toLocaleString(
                  "en-IN"
                )}</span>
              </div>
              <div>
                <span class="stat-head">Region: </span>
                <span class="stat-body">${country.region}</span>
              </div>
              <div>
                <span class="stat-head">Sub Region: </span>
                <span class="stat-body">${
                  country.subregion ? country.subregion : "N/A"
                }</span>
              </div>
              <div>
                <span class="stat-head">Capital: </span>
                <span class="stat-body">${capital}</span>
              </div>
            </div>
            <div class="stats-2">
              <div>
                <span class="stat-head">Top Level Domain: </span>
                <span class="stat-body">${country.tld.join(", ")}</span>
              </div>
              <div>
                <span class="stat-head">Currencies: </span>
                <span class="stat-body">${currency}</span>
              </div>
              <div>
                <span class="stat-head">Languages: </span>
                <span class="stat-body">${languages}</span>
              </div>
            </div>
          </div>
          <div class="border-countries">
            <span class="stat-head">Border Countries:</span>
            <div class="border-country-btns"></div>
          </div>
        </div>
        
      `;

      const flagDiv = document.querySelector(".country-page-flag-div");
      const flagImg = flagDiv ? flagDiv.querySelector("img") : null;

      // from gpt
      function removeFlagShimmer() {
        if (!flagDiv) return;
        // remove both general and size-specific shimmer classes
        flagDiv.classList.remove("shimmer", "shimmer-flag");
      }

      function cleanupFlagHandlers() {
        if (!flagImg) return;
        flagImg.removeEventListener("load", onLoad);
        flagImg.removeEventListener("error", onError);
      }

      // define listeners as named functions so we can remove them
      function onLoad() {
        // prefer decode() when available to ensure image is decoded and ready to paint
        if (flagImg.decode) {
          flagImg
            .decode()
            .then(() => {
              removeFlagShimmer();
              cleanupFlagHandlers();
            })
            .catch(() => {
              // even if decode fails, remove the shimmer so user sees the image (browser may still paint)
              removeFlagShimmer();
              cleanupFlagHandlers();
            });
        } else {
          removeFlagShimmer();
          cleanupFlagHandlers();
        }
      }

      function onError() {
        // image failed to load — remove shimmer and show fallback text
        removeFlagShimmer();
        if (flagDiv)
          flagDiv.innerHTML =
            '<div class="flag-fallback">Flag not available</div>';
        cleanupFlagHandlers();
      }

      if (flagImg) {
        // case A: already loaded (cached)
        if (flagImg.complete && flagImg.naturalWidth > 0) {
          // still prefer decode() where supported
          if (flagImg.decode) {
            flagImg
              .decode()
              .then(() => {
                removeFlagShimmer();
              })
              .catch(() => {
                removeFlagShimmer();
              });
          } else {
            removeFlagShimmer();
          }
        } else {
          // case B: not loaded yet — attach listeners
          flagImg.addEventListener("load", onLoad);
          flagImg.addEventListener("error", onError);
        }
      } else {
        // no image element found (unexpected) — remove shimmer so user sees content
        removeFlagShimmer();
      }

      const borders = country.borders;
      console.log(borders);

      const borderCountryBtnsDiv = document.querySelector(
        ".border-country-btns"
      );

      function checkBorderCountries() {
        if (!borders || borders.length === 0) {
          borderCountryBtnsDiv.innerHTML = "&nbsp; N/A";
          return;
        }

        let countBorder = borders.length;
        let borderList =
          countBorder > 3 ? borders.slice(0, 3) : borders.slice(0, countBorder);

        borderList.forEach((countryCode) => {
          fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then((res) => res.json())
            .then((data) => {
              const anchor = document.createElement("a");
              anchor.href = `./country.html?name=${data[0].name.common}`;
              const button = document.createElement("button");
              button.classList.add("country-btn");
              button.innerText = data[0].name.common;
              anchor.appendChild(button);
              borderCountryBtnsDiv.appendChild(anchor);
            });
        });
      }

      checkBorderCountries();
    })
    .catch((err) => {
      console.error(err);
      setPersistentButtonsLoading(false);
      alert("Failed to load country data");
    })
    .finally(() => {
      setPersistentButtonsLoading(false);
    });
} else {
  alert("Country not found");
}
