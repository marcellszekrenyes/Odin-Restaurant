
const content = document.getElementById('content');

function createNode(type, id, parent) {
    const newNode = document.createElement(`${type}`);
    newNode.setAttribute('id', id);
    parent.appendChild(newNode);
    return newNode;
}

function atttachImage(id, src, alt, parent) {
    const newImage = document.createElement(`img`);
    newImage.setAttribute('id', id);
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', alt);
    parent.appendChild(newImage);
    return newImage;
}

function addText(type, id, content, parent) {
    const newText = document.createElement(`${type}`);
    newText.setAttribute('id', id);
    newText.textContent = content;
    parent.appendChild(newText);
    return newText;
}

const header = createNode('div', 'header', content);
const pageContent = createNode('div', 'pageContent', content);
const footer = createNode('div', 'footer', content);
// const coverPhoto = atttachImage('coverPhoto', './restaurant_photo.jpg', 'Photo of the restaurant', content)

const titleContainer = createNode('div', 'titleContainer', header);
addText('h1', 'title', 'Coral Reef Cafe & Seafood', titleContainer);
const reservations = createNode('div', 'reservations', header);
addText('h2', 'reservations', 'Reservations', reservations);
const menu = createNode('div', 'menu', header);
addText('h2', 'menu', 'Menu', menu);
const contact = createNode('div', 'contact', header);
addText('h2', 'contact', 'Contact', contact);

const reserveTable = createNode('div', 'reserveTable', content);

const welcomeDiv = createNode('div', 'welcomeDiv', content);
const welcomeText = addText('p', 'welcomeText', 'Welcome to Coral Reef', welcomeDiv);
const bookTable = addText('btn', 'bookTable', 'Book a table', welcomeDiv);

bookTable.addEventListener('click', () => {
    bookTable.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;')
    welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;')
    setTimeout(()=>{reserveTable.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 80%; pointer-events: auto;')}, 1500)
})

