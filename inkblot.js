const imageContainer = document.getElementById('imageContainer');
const resultButton = document.getElementById('resultButton');
const nextButton = document.getElementById('nextButton');
let imageUrls = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png'
];
const resultUrls = [
  'result1.jpg',
  'result2.jpg',
  'result3.jpg',
  'result4.jpg',
  'result5.jpg',
  'result6.jpg',
  'result7.jpg',
  'result8.jpg',
  'result9.jpg',
  'result10.jpg'
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
