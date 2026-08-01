async function loadStatistics() {

    try {

        const response = await fetch("data/stats.json");
        const stats = await response.json();

        document.getElementById("hero-photo-count").textContent =
            stats.photos.toLocaleString();

        document.getElementById("hero-album-count").textContent =
            stats.albums.toLocaleString();

        document.getElementById("hero-latest-title").textContent =
            stats.latest.title;

        document.getElementById("hero-latest-date").textContent =
            stats.latest.date;

    }

    catch(error){

        console.error(error);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadStatistics
);