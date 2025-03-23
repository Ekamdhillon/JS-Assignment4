document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");

    // Fetch JSON file from GitHub Pages
    fetch("https://ekamdhillon.github.io/datagamesjson/games.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then(data => {
            // Display each game in the container
            data.forEach(game => {
                const gameCard = document.createElement("div");
                gameCard.classList.add("game-card");

                gameCard.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <h2>${game.title}</h2>
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Release Year:</strong> ${game.release_year}</p>
                `;

                gameContainer.appendChild(gameCard);
            });
        })
        .catch(error => {
            gameContainer.innerHTML = `<p style="color: red;">Error loading data: ${error.message}</p>`;
        });
});
