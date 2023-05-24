
//THIS SECTION CREATES THE BASIC LAYOUT

const content = document.getElementById('content');
let clickCounter = 0;

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

const titleContainer = createNode('div', 'titleContainer', header);
addText('h1', 'title', 'Coral Reef Cafe & Seafood', titleContainer);
const reservations = createNode('div', 'reservations', header);
addText('h2', 'reservations', 'Reservations', reservations);
const menu = createNode('div', 'menu', header);
addText('h2', 'menu', 'Menu', menu);
const contact = createNode('div', 'contact', header);
addText('h2', 'contact', 'Contact', contact);

const formContainer = createNode('div', 'formContainer', content);

const welcomeDiv = createNode('div', 'welcomeDiv', content);
const welcomeText = addText('p', 'welcomeText', 'Welcome to Coral Reef', welcomeDiv);
const bookTable = addText('btn', 'bookTable', 'Book a table', welcomeDiv);


//Opens reservations tab on click of Book table button
bookTable.addEventListener('click', () => {
    clickCounter++;
    bookTable.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
    welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
    welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');    
    setTimeout(()=>{formContainer.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 50%;')}, 1500);
    setTimeout(()=>{reserveForm()}, 2000);
}, {once: true})

//Controls the reservation form, reloads or hides etc...
reservations.addEventListener('click', () => {
    if(clickCounter >= 1) {
        welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        formContainer.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 50%;');
    }

    if(document.getElementById('reserveForm') || document.getElementById('menuContainer')) {
        if(document.getElementById('reserveForm')){
            document.getElementById('reserveForm').remove();
            reserveForm();
        }

        if(document.getElementById('menuContainer')){
            document.getElementById('menuContainer').remove();
            setTimeout(()=>{reserveForm()}, 1500);
        }

    } else {
        bookTable.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        setTimeout(()=>{formContainer.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 50%;')}, 1500);
        setTimeout(()=>{reserveForm()}, 2000);
    }

    clickCounter++;
})

//Controls the menu form, reloads or hides etc...
menu.addEventListener('click', () => {
    if(clickCounter >= 1) {
        welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        formContainer.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 50%;');
    }

    if(document.getElementById('reserveForm') || document.getElementById('menuContainer')) {
        if(document.getElementById('reserveForm')){
            document.getElementById('reserveForm').remove();
            createMenu();
        }

        if(document.getElementById('menuContainer')){
            document.getElementById('menuContainer').remove();
            setTimeout(()=>{createMenu()}, 1500);
        }

    } else {
        bookTable.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 0;');
        setTimeout(()=>{formContainer.setAttribute('style', 'transition-delay: 2s; transition: 0.8s; width: 50%;')}, 1500);
        setTimeout(()=>{createMenu()}, 2000);
    }

    clickCounter++;
})

//When called, it creats a form for reservation with createFieldset() and createInput()
function reserveForm() {
    const reserveForm = document.createElement('form');
    reserveForm.setAttribute('id', 'reserveForm');
    formContainer.appendChild(reserveForm);
    reserveForm.setAttribute('style', 'transition: 1.5s; background-color: rgba(0, 0, 0, 0.8); width: 55%; height: 83%; padding: 2.5%;');

    const contactData = createFieldset('Contact Data');
    contactData.appendChild(createInput('text', 'firstName', 'John', 'First Name'));
    contactData.appendChild(createInput('text', 'lastName', 'Smith', 'Last Name'));
    contactData.appendChild(createInput('tel', 'phoneNumber', '+(49)12345678900', 'Phone Number'));
    contactData.appendChild(createInput('email', 'email', 'example@example.com', 'E-Mail'));

    const reservationDetails = createFieldset('Reservation  Details');
    reservationDetails.appendChild(createInput('num', 'numberOfPersons', '2', 'Number of persons'));
    reservationDetails.appendChild(createInput('date', 'date', '21/05/2023', 'Date of reservation'));
    reservationDetails.appendChild(createInput('time', 'time', '13:00', 'Time of reservation'));
    reservationDetails.appendChild(createInput('duration', 'duration', '2', 'Duration of reservation'));

    reserveForm.appendChild(contactData);
    reserveForm.appendChild(reservationDetails);
 
    const reserveButton = document.createElement('button');
    reserveButton.setAttribute('id', 'reserveButton'); 
    reserveButton.setAttribute('type', 'button'); 
    reserveButton.textContent = 'Reserve';
    reserveForm.appendChild(reserveButton);

    reserveButton.addEventListener('click', () => {
        reserveForm.setAttribute('style', 'transition: 1.5s; background-color: rgba(0, 0, 0, 0.8); width: 55%; height: 83%; padding: 2.5%; display: none; pointer-events: none;');
        formContainer.setAttribute('style', 'transition: 1.5s; pointer-events: auto; opacity: 0;')
        welcomeText.textContent = `Dear ${document.getElementById('firstName').value}, your booking for ${document.getElementById('numberOfPersons').value} was successful! See you on ${document.getElementById('date').value} at ${document.getElementById('time').value}.`;
        welcomeText.setAttribute('style', 'transition: 1.5s; pointer-events: auto; font-size: 4rem; opacity: 1;');
        setTimeout(() => {
            welcomeDiv.setAttribute('style', 'transition: 1.5s; pointer-events: none; opacity: 1;');
        }, 2000);
    })

}

function createFieldset(legend) {
    const contactData = document.createElement('fieldset');
    contactData.setAttribute('style', 'border: none; font-weight: 600; color: #f3a993;')
    const contactDataLabel = document.createElement('legend');
    contactDataLabel.textContent = `${legend}`;
    contactDataLabel.setAttribute('style', 'font-size: 2rem; margin-bottom: 2.5%;')
    contactData.appendChild(contactDataLabel);

    return contactData;
}

function createInput(type, name, placeholder, label) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'display: flex; flex-direction: column; margin-bottom: 1%');
    
    const newInput = document.createElement('input');
    newInput.setAttribute('type', `${type}`);
    newInput.setAttribute('name', `${name}`);
    newInput.setAttribute('id', `${name}`);
    newInput.setAttribute('class', `input`);
    newInput.setAttribute('placeholder', `${placeholder}`);
    newInput.setAttribute('style', 'width: 40%; margin: 0.5% 5%;  color: #f3a993; background-color: rgba(196, 219, 228, 0.5);');
    newInput.required = true;    
    
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `${name}`);
    newLabel.textContent = `${label}`;
    newLabel.setAttribute('style', 'margin-left: 5%;');
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    
    return newDiv;
}

//When called, it creats and displays the menu with the help of newFood()
function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    formContainer.appendChild(menuContainer);
    menuContainer.setAttribute('style', 'transition: 1.5s; background-color: rgba(0, 0, 0, 0.8); width: 55%; height: 83%; padding: 2.5%;');

    const menuTitle = document.createElement('div');
    menuTitle.textContent = 'Menu';
    menuTitle.setAttribute('style', 'font-size: 2rem; font-weight: 600; color: #f3a993; margin-bottom: 2.5%;');

    const firstFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');
    const secondFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');
    const thirdFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');
    const fourthFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');
    const fifthFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');
    const sixthFood = newFood('Lasagne Bolognese', 'Pasta, Cheese, Tomato, More cheese, Even more cheese, Besamel, Mint, Beef');

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(firstFood);
    menuContainer.appendChild(secondFood);
    menuContainer.appendChild(thirdFood);
    menuContainer.appendChild(fourthFood);
    menuContainer.appendChild(fifthFood);

}

function newFood(title, content) {
    const foodContainer = document.createElement('div');
    foodContainer.setAttribute('style', 'display: flex; flex-direction: column; flex: 1 1 100%;  width: 80%; height: 15%; color: rgba(0, 0, 0, 0.8); margin: 0 0 2.5% 5%; border-bottom: 2px solid #f3a993;');

    const foodName = document.createElement('div');
    foodName.setAttribute('style', 'width: 80%; height: 50%; margin: 0 0 2.5% 0; font-weight: 600; font-size: 1.5rem; color: #f3a993;');
    foodName.textContent = title;

    const ingredients = document.createElement('div');
    ingredients.setAttribute('style', 'width: 80%; height: 50%; margin: 0 0 2.5% 2.5%; font-weight: 600; font-size: 0.8rem; color: #f3a993;');
    ingredients.textContent = content;

    foodContainer.appendChild(foodName);
    foodContainer.appendChild(ingredients);

    return foodContainer;
}



