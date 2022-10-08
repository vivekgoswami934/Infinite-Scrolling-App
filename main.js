// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const API =
  "https://api.unsplash.com/photos/random/?client_id=osvC4CFIy9TQtImOfc_eA-GTn5r7RoKRA-SmKpPgRkE&count=10";

let photosArray = [];

//get photos from api
const getPhotos = async () => {
  try {
    const response = await fetch(API);
    photosArray = await response.json();
    console.log(photosArray.length);
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
};

getPhotos();

const imageContainer = document.getElementById("imgcontainer");

//display data in photos
function displayPhotos() {
  photosArray?.map((photos) => {
    console.log("vivek");
    const img = document.createElement("img");
    img.setAttribute("src", photos.urls.regular);
    imageContainer.appendChild(img);
  });
}
