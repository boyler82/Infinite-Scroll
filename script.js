const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true

// Unsplash API
let count = 2;
const apiKey = 'bMUG-xmnXs5DBxSVG6MYdHFuURy3zoinhjhQSE94RgY';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if image were loaded
function imageLoaded() {
    imagesLoaded ++;
    console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready=', ready);
        initialLoad = false;
        count = 10
    }

}

// crating images
function displayPhotos() {
    imagesLoaded = 0
    totalImages =photosArray.length;
    console.log('total images=', totalImages);
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Event listner check if finish loading
        img.addEventListener('load', imageLoaded);
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

// Event listner LOAD


// Check if near botom of page , load new photow
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1500 && ready) {
        ready = false;
        getPhotos();
    }
        
    });


// start
getPhotos();