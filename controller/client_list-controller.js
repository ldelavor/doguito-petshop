import { clientService } from '../service/client-service.js'

// A new row in the table represents a new client in the database
const createNewRow = (name, email, id) => {
    // Creating a new table row (<tr>) using DOM
    const newRowClient = document.createElement('tr') 

    // Creating the template content
    const content = 
    `<td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
        <ul class="table__buttons-control">
            <li><a href="../screens/edit_client.html?id=${id}" class="button-simple button-simple--edit">Edit</a></li>
            <li><button class="button-simple button-simple--delete" type="button">Delete</button></li>
        </ul>
    </td>`;

    // Inserting the template content inside the <tr> element
    newRowClient.innerHTML = content;

    // Creating ad inserting a data-attribute'id' 
    newRowClient.dataset.id = id;
    return newRowClient;
}

// Get the tbody (parent node)
const table = document.querySelector('[data-table]');

const render = async () => {
    // Execute the promise and callback
    try {
        const listClients = await clientService.clientsList()   
        listClients.forEach((element) => {
            // Add the child node in tbody
            table.appendChild(createNewRow(element.name, element.email, element.id));
        })
    }
    catch (error) {
        console.log(error);
        window.location.href = '../screens/error.html'
    }
}
render();

// Monitoring the form to verify when the 'delete button' is clicked
table.addEventListener('click', async (event) => {
    if (event.target.className == "button-simple button-simple--delete"){
        try {
            const rowClient = event.target.closest('[data-id]');
            const id = rowClient.dataset.id;
            await clientService.removeClient(id)
            rowClient.remove();
        }
        catch (error) {
            console.log(error);
            window.location.href = '../screens/error.html'
        }
    }
})