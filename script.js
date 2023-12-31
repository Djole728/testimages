// List of image file names (add your own images to the "images" folder)
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

// List of random texts
const texts = [
    "This is some random text.",
    "Another random text example.",
    "Yet another random text.",
];

// Function to generate and display random content
function generateRandomContent() {
    // Generate a random index for the images and texts
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomTextIndex = Math.floor(Math.random() * texts.length);

    // Set the random image and text
    const randomImage = images[randomImageIndex];
    const randomText = texts[randomTextIndex];

    document.getElementById("random-image").src = "images/" + randomImage;
    document.getElementById("random-text").textContent = randomText;
}

// Trigger the generation of random content on page load
window.addEventListener("load", generateRandomContent);

// Add an event listener to the "Generate Random Content" button
document.getElementById("generate-button").addEventListener("click", generateRandomContent);