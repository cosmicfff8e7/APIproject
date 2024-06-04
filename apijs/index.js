document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = "https://api.artic.edu/api/v1/artworks";
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        const artworksList = document.getElementById('artworks-list');
        const randomArtworks = getRandomArtworks(data.data, 3); // Get 3 random artworks
        randomArtworks.forEach(artwork => {
          const artworkDiv = document.createElement('div');
          artworkDiv.classList.add('artwork');
          artworkDiv.innerHTML = `
            <h2>${artwork.title}</h2>
            <p>Artist: ${artwork.artist_display}</p>
          `;
          artworksList.appendChild(artworkDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Function to get random artworks
    function getRandomArtworks(artworks, count) {
      const shuffledArtworks = artworks.sort(() => 0.5 - Math.random());
      return shuffledArtworks.slice(0, count);
    }
  });
  