function mostrarAnimes() {
    const animeList = document.getElementById('animeList');
    animeList.innerHTML = ""; // Limpa antes de adicionar
    animes.forEach((anime, i) => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <div class="anime-thumb">
                <img src="${anime.imagem}" alt="${anime.nome}">
            </div>
            <div class="anime-info">
                <h3>${anime.nome}</h3>
                <button class="assistir-btn" onclick="assistirAnime(${i})">Assistir</button>
            </div>
        `;
        animeList.appendChild(card);
    });
}