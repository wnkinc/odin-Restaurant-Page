export function loadContactPage() {
    const content = document.getElementById('content');

    // Create the background-container div
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'background-container';

    // Create and append text elements to backgroundContainer
    const text1 = document.createElement('div');
    text1.textContent = 'What are you looking for?';
    backgroundContainer.appendChild(text1);

    const p1 = document.createElement('p');
    p1.textContent = 'A form?';
    backgroundContainer.appendChild(p1);

    const p2 = document.createElement('p');
    p2.className = 'pray';
    p2.textContent = 'Pray child!';
    backgroundContainer.appendChild(p2);

    // Create the footer div
    const footer = document.createElement('footer');
    footer.textContent = 'This is a footer';

    // Append backgroundContainer and footer to content div
    content.appendChild(backgroundContainer);
    content.appendChild(footer);
}
