const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []

// Unsplash API
const count = 1;
const apiKey = "bMUG-xmnXs5DBxSVG6MYdHFuURy3zoinhjhQSE94RgY";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
// fjhgjh
    }
}
// // Check if near botom of page , load new photow
// window.addEventListener('scroll', () => {
//     console.log("scerollinggggggg"); 
        
//     });


// start
getPhotos();