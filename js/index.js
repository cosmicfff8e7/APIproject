function fetchTestArt1() {
  const testArtUrl1 = "https://api.artic.edu/api/v1/artworks/245166";
  fetch(testArtUrl1)
    .then((response) => {
      if (!response.ok) {
        throw new Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const artwork = data.data;
      const iiifUrl = data.config.iiif_url;
      const imageUrl = `${iiifUrl}/${artwork.image_id}/full/843,/0/default.jpg`;

      const artworkList = document.getElementById("test-artwork1");
      artworkList.innerHTML = ''; // Clear previous content
      const listItem = document.createElement("li");

      const artworkTitle = document.createElement("h3");
      artworkTitle.textContent = artwork.title;

      const artworkImage = document.createElement("img");
      artworkImage.src = imageUrl;
      artworkImage.alt = artwork.title;

      const artworkDescription = document.createElement("p");
      artworkDescription.textContent = artwork.thumbnail.alt_text;

      listItem.appendChild(artworkTitle);
      listItem.appendChild(artworkImage);
      listItem.appendChild(artworkDescription);
      artworkList.appendChild(listItem);
    })
    .catch((error) => {
      console.error("ERROR", error);
    });
}





function fetchTestArt2() {
  const testArtUrl2 = "https://api.artic.edu/api/v1/artworks/245164";
  fetch(testArtUrl2)
    .then((response) => {
      if (!response.ok) {
        throw new Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const artwork = data.data;
      const iiifUrl = data.config.iiif_url;
      const imageUrl = `${iiifUrl}/${artwork.image_id}/full/843,/0/default.jpg`;

      const artworkList = document.getElementById("test-artwork2");
      artworkList.innerHTML = ''; // Clear previous content
      const listItem = document.createElement("li");

      const artworkTitle = document.createElement("h3");
      artworkTitle.textContent = artwork.title;

      const artworkImage = document.createElement("img");
      artworkImage.src = imageUrl;
      artworkImage.alt = artwork.title;

      const artworkDescription = document.createElement("p");
      artworkDescription.textContent = artwork.thumbnail.alt_text;

      listItem.appendChild(artworkTitle);
      listItem.appendChild(artworkImage);
      listItem.appendChild(artworkDescription);
      artworkList.appendChild(listItem);
    })
    .catch((error) => {
      console.error("ERROR", error);
    });
}

fetchTestArt1();
fetchTestArt2();
