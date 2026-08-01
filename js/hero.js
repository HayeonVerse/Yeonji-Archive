let heroes = [];
let currentIndex = 0;

let activeImage;
let inactiveImage;

function updateHeroText(hero) {

    document.getElementById("hero-title").textContent = hero.title;
    document.getElementById("hero-date").textContent = hero.date;

}

function showHero(index, firstLoad = false) {

    const hero = heroes[index];

    if (firstLoad) {

        activeImage.src = hero.image;
        activeImage.alt = hero.title;

        activeImage.classList.add("active");

        updateHeroText(hero);

        return;

    }

    inactiveImage.onload = () => {

        inactiveImage.classList.add("active");
        activeImage.classList.remove("active");

        updateHeroText(hero);

        [activeImage, inactiveImage] =
            [inactiveImage, activeImage];

    };

    inactiveImage.src = hero.image;
    inactiveImage.alt = hero.title;

}

function nextHero() {

    if (heroes.length <= 1) return;

    let next;

    do {

        next = Math.floor(Math.random() * heroes.length);

    } while (next === currentIndex);

    currentIndex = next;

    showHero(currentIndex);

}

async function loadHero() {

    try {

        const response = await fetch("data/featured.json");

        heroes = await response.json();

        if (!heroes.length) return;

        activeImage = document.getElementById("hero-image-a");
        inactiveImage = document.getElementById("hero-image-b");

        currentIndex =
            Math.floor(Math.random() * heroes.length);

        showHero(currentIndex, true);

        setInterval(nextHero, 8000);

    }

    catch (error) {

        console.error(error);

    }

}

document.addEventListener(
    "DOMContentLoaded",
    loadHero
);