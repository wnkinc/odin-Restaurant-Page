export function loadMenuPage() {
    const contentDiv = document.getElementById('content');

    // Create the first background image container
    const backgroundImg1 = document.createElement('div');
    backgroundImg1.className = 'background-img1';

    // Create the first overlay text
    const overlayText1 = document.createElement('div');
    overlayText1.className = 'overlay-text';
    overlayText1.textContent = 'Never thirst again...';

    // Add image attribution for the first image
    const imgAttribution1 = document.createTextNode('- img by "Pixabay" @ pexels.com');

    // Append the overlay text and image attribution to the first background container
    backgroundImg1.appendChild(overlayText1);
    backgroundImg1.appendChild(imgAttribution1);

    // Create the first text container
    const text1 = document.createElement('div');
    text1.className = 'text';
    text1.textContent = 'Blood of Christ';

    // Create the price paragraph for the first text container
    const price1 = document.createElement('p');
    price1.textContent = '$20';

    // Append the price to the first text container
    text1.appendChild(price1);

    // Create the second text container
    const text2 = document.createElement('div');
    text2.className = 'text';
    text2.textContent = 'Body of Christ';

    // Create the price paragraph for the second text container
    const price2 = document.createElement('p');
    price2.textContent = '$33';

    // Append the price to the second text container
    text2.appendChild(price2);

    // Create the second background image container
    const backgroundImg2 = document.createElement('div');
    backgroundImg2.className = 'background-img2';

    // Create the second overlay text
    const overlayText2 = document.createElement('div');
    overlayText2.className = 'overlay-text';
    overlayText2.textContent = 'Never hunger again...';

    // Add image attribution for the second image
    const imgAttribution2 = document.createTextNode('- img by "Marta Dzedyshko" @ pexels.com');

    // Append the overlay text and image attribution to the second background container
    backgroundImg2.appendChild(overlayText2);
    backgroundImg2.appendChild(imgAttribution2);

    // Create the footer
    const footer = document.createElement('footer');
    footer.textContent = 'This is a footer';

    // Append all elements to the content div
    contentDiv.appendChild(backgroundImg1);
    contentDiv.appendChild(text1);
    contentDiv.appendChild(text2);
    contentDiv.appendChild(backgroundImg2);
    contentDiv.appendChild(footer);
}