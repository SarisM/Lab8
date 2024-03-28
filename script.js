async function fetchAndDisplayImages() {
    const container = document.querySelector('.character-images');
	const lastCharacter = 826;

	for (let i = 1; i <= lastCharacter; i++) {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`);

			if (response.ok) {
				const imageUrl = response.url;
				const name =  `Character ${i}`
				const message = `Este es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos`
				const postHTML = createPost(name, message, imageUrl);
				container.innerHTML += postHTML;
			}
		} catch (error) {
			console.error(error);
		}
	}
}

	

function createPost(name, message, imageURL) {
	return `
        <div class="card">
            <img src="${imageURL}" alt="${name}" />
            <h1>${name}</h1>
            <p>${message}</p>
        </div>
    `;
}

fetchAndDisplayImages();
