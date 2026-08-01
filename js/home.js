async function loadLatestAlbums() {

    const container = document.getElementById("latest-albums");

    if (!container) return;

    try {

        const response = await fetch("data/albums.json");
        const albums = await response.json();

        container.innerHTML = albums.map(album => `

            <article class="album-card">

                <div class="album-cover">

                    <img
                        src="${album.cover}"
                        alt="${album.title}"
                        loading="lazy"
                    >

                    <div class="album-overlay">

                        ${album.new ? `
                        <span class="album-badge">
                            NEW
                        </span>
                        ` : ""}

                        <div class="album-info">

                            <h3>${album.title}</h3>

                            <div class="album-details">

                                <span>${album.photos} Photos</span>

                                <span>${album.date}</span>

                            </div>

                        </div>

                    </div>

                </div>

            </article>

        `).join("");

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadLatestAlbums
);