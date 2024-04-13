function getCharacters(done) {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=20")
    .then(response => response.json())
    .then(data => {
        done(data);
    });
}

getCharacters(data => {
    data.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.character}</h2>
                <span>${personaje.quote}</span>
            </article>
        `);
        const main = document.querySelector("main");

        main.append(article);
    });
});
