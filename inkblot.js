const imageContainer = document.getElementById('imageContainer');
const resultButton = document.getElementById('resultButton');
const nextButton = document.getElementById('nextButton');
let imageUrls = [
  'icons/1.png',
  'icons/2.png',
  'icons/3.png',
  'icons/4.png',
  'icons/5.png',
  'icons/6.png',
  'icons/7.png',
  'icons/8.png',
  'icons/9.png',
  'icons/10.png'
];
const resultUrls = [
  'icons/result1.jpg',
  'icons/result2.jpg',
  'icons/result3.jpg',
  'icons/result4.jpg',
  'icons/result5.jpg',
  'icons/result6.jpg',
  'icons/result7.jpg',
  'icons/result8.jpg',
  'icons/result9.jpg',
  'icons/result10.jpg'
];
let currentIndex = 0;
let currentIndex2 = 0;
let imageCounter = 0; // Counter to track image display

function displayImage() {
  // image.style.display= 'none';
  const imageUrl = imageUrls[currentIndex];
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image ${currentIndex + 1}">`;
  currentIndex = (currentIndex + 1) % imageUrls.length;
  imageCounter++;
  if (imageCounter === 10) { // If displayed 10 images, show result
    showResult();
    return;
  }
  setTimeout(() => {
    imageContainer.innerHTML = '';
    nextButton.style.display = 'block';
    // image.style.display= 'inline-block';
  }, 9000);
}

function showResult() {
    imageCounter = 0; // Reset the counter
    displayResult();
}

function displayResult() {
    const resultUrl = resultUrls[currentIndex2];
    imageContainer.innerHTML = `<img src="${resultUrl}" alt="Image ${currentIndex2 + 1}">`;
    currentIndex2 = (currentIndex2 + 1)% resultUrls.length;
  
    resultButton.style.display = 'block';
}

function startImageSlider() {
  displayImage();
}

function showNextImage() {
  nextButton.style.display = 'none';
  displayImage();
}



startImageSlider();
nextButton.addEventListener('click', showNextImage);
resultButton.addEventListener('click',showResult);
