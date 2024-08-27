export function loadHomePage() {
    const contentDiv = document.getElementById('content');

    // Create the background container div
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background-container';

    // Create the overlay text div
    const overlayText = document.createElement('div');
    overlayText.className = 'overlay-text';
    overlayText.textContent = 'HOLY GRAIL';

    // Add image attribution
    const imgAttribution = document.createTextNode('- Img by "Life Of Pix" @ pexels.com');

    // Append the overlay text and image attribution to the background container
    backgroundContainer.appendChild(overlayText);
    backgroundContainer.appendChild(imgAttribution);

    // Create the verse div
    const verseDiv = document.createElement('div');
    verseDiv.className = 'verse';
    verseDiv.textContent = '"I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty."';

    // Create the author paragraph
    const author = document.createElement('p');
    author.textContent = '— Jesus Christ';

    // Append the author to the verse div
    verseDiv.appendChild(author);

    // Create the footer
    const footer = document.createElement('footer');
    footer.textContent = 'This is a footer';

    // Append all elements to the content div
    contentDiv.appendChild(backgroundContainer);
    contentDiv.appendChild(verseDiv);
    contentDiv.appendChild(footer);
}