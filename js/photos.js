async function loadLatestPhotos() {

    const container = document.getElementById("latest-photos");

    if (!container) return;

    try {

        const response = await fetch("data/photos.json");

        const photos = await response.json();

container.innerHTML = photos.map(photo=>`

    
<article class="photo-card">

    <img
        src="${photo.image}"
        alt="${photo.album}"
        loading="lazy"
    >

    <div class="photo-overlay">

        <div class="photo-album">

            ${photo.album}

        </div>

        <div class="photo-date">

            ${photo.date}

        </div>

    </div>

</article>

`).join("");

const cards = container.querySelectorAll(".photo-card");

cards.forEach(card => {

    const img = card.querySelector("img");

    img.addEventListener("load", () => {

        const ratio = img.naturalWidth / img.naturalHeight;

        if (ratio >= 1.35) {

            card.classList.add("featured-photo");

        }

    });

});

    }

    catch(error){

        console.error(error);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadLatestPhotos
);