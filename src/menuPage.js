export function loadMenuPage() {
    const content = document.getElementById('content');

    // Create the background-container div
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background-container';

    // Create the first background-img1 div
    const backgroundImg1 = document.createElement('div');
    backgroundImg1.className = 'background-img1';
    const overlayText1 = document.createElement('div');
    overlayText1.className = 'overlay-text';
    overlayText1.textContent = 'Never thirst again...';
    backgroundImg1.appendChild(overlayText1);
    backgroundImg1.innerHTML += '- img by "Pixabay" @ pexels.com';

    // Create the first text div
    const text1 = document.createElement('div');
    text1.className = 'text';
    text1.innerHTML = 'Blood of Christ<p>$20</p>';

    // Create the second text div
    const text2 = document.createElement('div');
    text2.className = 'text';
    text2.innerHTML = 'Body of Christ<p>$33</p>';

    // Create the second background-img2 div
    const backgroundImg2 = document.createElement('div');
    backgroundImg2.className = 'background-img2';
    const overlayText2 = document.createElement('div');
    overlayText2.className = 'overlay-text';
    overlayText2.textContent = 'Never hunger again...';
    backgroundImg2.appendChild(overlayText2);
    backgroundImg2.innerHTML += '- img by "Marta Dzedyshko" @ pexels.com';

    // Create the footer div
    const footer = document.createElement('footer');
    footer.textContent = 'This is a footer';

    // Append all created elements to the background-container
    backgroundContainer.appendChild(backgroundImg1);
    backgroundContainer.appendChild(text1);
    backgroundContainer.appendChild(text2);
    backgroundContainer.appendChild(backgroundImg2);

    // Append the background-container and footer to the content div
    content.appendChild(backgroundContainer);
    content.appendChild(footer);
}