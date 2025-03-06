const API_KEY = "59644062"; // Replace with your OMDB API key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// DOM Elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const moviesContainer = document.getElementById("movies-container");

// Fetch movies starting with a specific letter
async function fetchMoviesByLetter(letter) {
    try {
        const response = await fetch(`${API_URL}&s=${letter}*`);
        const data = await response.json();
        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            displayError(data.Error || "No movies found.");
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        displayError("An error occurred while fetching movies.");
    }
}

// Display movies in the DOM
function displayMovies(movies) {
    moviesContainer.innerHTML = ""; // Clear previous content

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Type:</strong> ${movie.Type}</p>
            </div>
        `;

        moviesContainer.appendChild(movieCard);
    });
}

// Display error message in the DOM
function displayError(message) {
    moviesContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Event listener for search button
searchButton.addEventListener("click", () => {
    const letter = searchInput.value.trim();
    if (letter && letter.length === 1) {
        fetchMoviesByLetter(letter);
    } else {
        displayError("Please enter a single letter.");
    }
});

// Event listener for pressing Enter key
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const letter = searchInput.value.trim();
        if (letter && letter.length === 1) {
            fetchMoviesByLetter(letter);
        } else {
            displayError("Please enter a single letter.");
        }
    }
});
    
