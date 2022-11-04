import { clientService } from "../service/client-service.js";

// Get the 'id' of window location (html page identifier)
const getURL = new URL(window.location);
const id = getURL.searchParams.get('id');

// Get the inputs fields (empties) in the html page
const inputName = document.querySelector('[data-name]');
const inputEmail = document.querySelector('[data-email]');

// Insert the data client in the input fields
clientService.detailClient(id)
.then( data => {
    inputName.value = data.name;
    inputEmail.value = data.email;
})

// Uptade the data with the new informations
const form = document.querySelector('[data-form]')
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await clientService.uptadeDataClient(id, inputName.value, inputEmail.value);
    window.location.href = '../screens/edit_done.html';
})