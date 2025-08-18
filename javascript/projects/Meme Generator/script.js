const memeButton = document.querySelector(".generate-meme");
const memeContainer = document.querySelector(".meme-container");
const loading = document.querySelector(".loading");

const memeContent = document.createElement("div");
memeContent.classList.add("meme-content");

function getMemes() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => {
      if (!res.ok) {
        console.log("Network error: " + res.status);
      }
      return res.json();
    })
    .then((data) => {
    //   console.log(data);
      loading.style.display = "none";
      memeContent.innerHTML = ""; // Clear previous memes

      memeContent.innerHTML = `      
          <p class="meme-text">${data.title}</p>
          <div class="meme-image-container">
            <img
              class="meme-image"
              src="${data.url}"
              alt="meme-image"
            />
          </div>
          <div class="meme-author-container">
            <p>Meme By:</p>
            <p class="meme-author">${data.author}</p>
          </div>`;
      memeContainer.appendChild(memeContent);
    });
}

getMemes();

memeButton.addEventListener("click", () => {
  getMemes();
});
